import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

interface BookingData {
    fullName?: string;
    email?: string;
    company?: string;
    role?: string;
    projectBrief?: string;
    budgetRange?: string;
    timeline?: string;
}

async function sendWhatsAppNotification(bookingData: BookingData) {
    const sendzenPhone = process.env.SENDZEN_PHONE;
    const sendzenApiKey = process.env.SENDZEN_API_KEY;
    const yourWhatsAppNumber = process.env.YOUR_WHATSAPP_NUMBER;

    if (!sendzenPhone || !sendzenApiKey || !yourWhatsAppNumber) {
        console.log("Booking received (WhatsApp not configured):", bookingData);
        return;
    }

    const bookingMessage = `NEW BOOKING REQUEST

Contact Details:
- Name: ${bookingData.fullName || "Not provided"}
- Email: ${bookingData.email || "Not provided"}
- Company: ${bookingData.company || "Not provided"}
- Role: ${bookingData.role || "Not provided"}

Project Details:
- Budget: ${bookingData.budgetRange || "Not provided"}
- Timeline: ${bookingData.timeline || "Not provided"}

Project Brief:
${bookingData.projectBrief || "Not provided"}

Time: ${new Date().toLocaleString()}`;

    try {
        await fetch("https://api.sendzen.io/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sendzenApiKey}`,
            },
            body: JSON.stringify({
                from: sendzenPhone,
                to: yourWhatsAppNumber.replace("+", ""),
                type: "text",
                text: { body: bookingMessage },
            }),
        });
    } catch (error) {
        console.error("WhatsApp notification error:", error);
    }
}

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory, bookingData } = await request.json();

        const systemPrompt = `You are Blu, a friendly project consultant for Blunova. Your job is to collect booking information through a natural, conversational flow.

INFORMATION TO COLLECT (in a natural order, not all at once):
1. Name
2. Email
3. Company name
4. Their role
5. What they want to build (project brief)
6. Budget range
7. Timeline

CURRENT COLLECTED DATA:
${JSON.stringify(bookingData || {})}

GUIDELINES:
- Be warm, friendly, and conversational
- Ask ONE question at a time
- Keep responses short (1-2 sentences max)
- Acknowledge their answers before asking the next question
- Be flexible with the order based on what they share
- If they provide multiple pieces of info at once, acknowledge all of them
- When you have enough information (at minimum: name, email, and project brief), thank them and confirm the booking
- Don't be robotic - make it feel like a real conversation

RESPONSE FORMAT:
You must respond with valid JSON only:
{
  "message": "your conversational response",
  "bookingData": { updated booking data object },
  "isComplete": true/false (true only when you have at least name, email, and project brief)
}`;

        const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
            { role: "system", content: systemPrompt },
            ...(conversationHistory || []).map((msg: { role: string; content: string }) => ({
                role: msg.role as "user" | "assistant",
                content: msg.content,
            })),
            { role: "user", content: message },
        ];

        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.7,
            max_tokens: 500,
        });

        const responseText = completion.choices[0]?.message?.content || "";

        let parsedResponse;
        try {
            const jsonMatch = responseText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                parsedResponse = JSON.parse(jsonMatch[0]);
            } else {
                parsedResponse = {
                    message: responseText,
                    bookingData: bookingData || {},
                    isComplete: false,
                };
            }
        } catch {
            parsedResponse = {
                message: responseText,
                bookingData: bookingData || {},
                isComplete: false,
            };
        }

        if (parsedResponse.isComplete && parsedResponse.bookingData) {
            await sendWhatsAppNotification(parsedResponse.bookingData);
        }

        return NextResponse.json({
            message: parsedResponse.message,
            bookingData: parsedResponse.bookingData,
            isComplete: parsedResponse.isComplete,
        });
    } catch (error) {
        console.error("Booking chat error:", error);
        return NextResponse.json(
            {
                message: "Sorry, I had a little hiccup. Could you try that again?",
                bookingData: {},
                isComplete: false,
            },
            { status: 500 }
        );
    }
}
