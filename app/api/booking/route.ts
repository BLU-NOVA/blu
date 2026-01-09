import { NextRequest, NextResponse } from "next/server";

interface BookingData {
    fullName: string;
    email: string;
    company: string;
    role: string;
    projectBrief: string;
    budgetRange: string;
    timeline: string;
    referralSource: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: BookingData = await request.json();

        const sendzenPhone = process.env.SENDZEN_PHONE;
        const sendzenApiKey = process.env.SENDZEN_API_KEY;
        const yourWhatsAppNumber = process.env.YOUR_WHATSAPP_NUMBER;

        const bookingMessage = `NEW BOOKING REQUEST

Contact Details:
- Name: ${data.fullName}
- Email: ${data.email}
- Company: ${data.company}
- Role: ${data.role}

Project Details:
- Budget: ${data.budgetRange}
- Timeline: ${data.timeline}
- Referral Source: ${data.referralSource || "Not specified"}

Project Brief:
${data.projectBrief}

Time: ${new Date().toLocaleString()}

Action: Review and send calendar invite within 24 hours.`;

        if (!sendzenPhone || !sendzenApiKey || !yourWhatsAppNumber) {
            console.log("Booking received (WhatsApp not configured):", data);
            return NextResponse.json({
                success: true,
                message: "Booking received",
            });
        }

        const sendzenUrl = "https://api.sendzen.io/v1/messages";

        const response = await fetch(sendzenUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sendzenApiKey}`,
            },
            body: JSON.stringify({
                from: sendzenPhone,
                to: yourWhatsAppNumber.replace("+", ""),
                type: "text",
                text: {
                    body: bookingMessage,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error("SendZen API error:", errorData);
            throw new Error(`SendZen API error: ${response.status}`);
        }

        return NextResponse.json({
            success: true,
            message: "Booking submitted successfully",
        });
    } catch (error) {
        console.error("Booking submission error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to submit booking",
            },
            { status: 500 }
        );
    }
}
