import { NextRequest, NextResponse } from "next/server";

interface IntentAnalysis {
    intentScore: number;
    buyingSignals: string[];
    customerNeeds: string[];
    suggestedAction: string;
}

interface WhatsAppPayload {
    customerMessage: string;
    conversationSummary: string;
    intentScore: number;
    intentAnalysis?: IntentAnalysis;
    customerInfo: {
        name?: string;
        email?: string;
        phone?: string;
        interest?: string;
    };
}

export async function POST(request: NextRequest) {
    try {
        const { customerMessage, conversationSummary, intentScore, intentAnalysis, customerInfo }: WhatsAppPayload =
            await request.json();

        const sendzenPhone = process.env.SENDZEN_PHONE;
        const sendzenApiKey = process.env.SENDZEN_API_KEY;
        const yourWhatsAppNumber = process.env.YOUR_WHATSAPP_NUMBER;

        if (!sendzenPhone || !sendzenApiKey || !yourWhatsAppNumber) {
            console.log("WhatsApp credentials not configured:", {
                type: "HIGH_INTENT_LEAD",
                intentScore,
                intentAnalysis,
                customerMessage,
                customerInfo,
                timestamp: new Date().toISOString(),
            });

            return NextResponse.json({
                success: true,
                message: "Notification logged (WhatsApp not configured)",
            });
        }

        const notificationMessage = `HIGH INTENT LEAD DETECTED

Intent Score: ${intentScore}/100

Customer Contact:
- Name: ${customerInfo.name || "Not provided"}
- Phone: ${customerInfo.phone || "Not provided"}
- Email: ${customerInfo.email || "Not provided"}

Buying Signals:
${intentAnalysis?.buyingSignals?.length ? intentAnalysis.buyingSignals.map(s => `- ${s}`).join("\n") : "- None detected"}

Customer Needs:
${intentAnalysis?.customerNeeds?.length ? intentAnalysis.customerNeeds.map(n => `- ${n}`).join("\n") : "- Still discovering"}

Suggested Action:
${intentAnalysis?.suggestedAction || "Follow up immediately"}

Latest Message:
"${customerMessage}"

Recent Conversation:
${conversationSummary || "No previous messages"}

Time: ${new Date().toLocaleString()}

Action: Call ${customerInfo.phone || "the customer"} now to close the sale.`;

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
                    body: notificationMessage,
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error("SendZen API error:", errorData);
            throw new Error(`SendZen API error: ${response.status}`);
        }

        const result = await response.json();

        return NextResponse.json({
            success: true,
            messageId: result.id || result.message_id,
            message: "WhatsApp notification sent successfully",
        });
    } catch (error) {
        console.error("WhatsApp notification error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Failed to send WhatsApp notification",
            },
            { status: 500 }
        );
    }
}
