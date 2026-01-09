import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const COMPANY_KNOWLEDGE = `
COMPANY: Blunova

TAGLINE: Build & Launch Your Product Faster

CONTACT INFORMATION:
- Phone: +254795512357, +254740545704
- Book a discovery call at /book

WHAT WE DO:
Blunova helps founders build products and scale teams. We offer full-stack development, design, product expertise, and talent placement - all in one partnership. We turn ideas into durable products with positive impact.

HOW WE HELP:
1. Build Your Product - Turn your idea into reality with our full-stack team
2. Hire Top Talent - Find qualified engineers to join your team
3. Launch to Customers - Ship fast and start validating with real users
4. Scale & Grow - Expand your product and team as you grow

KEY STATS:
- 8 weeks average MVP delivery
- 10+ products launched
- 100% client satisfaction
- Industries: fintech, marketplaces, edtech, and more

OUR SERVICES:

1. Backend Development
- Microservices & monoliths (Node/NestJS, Go, Python, Java)
- GraphQL & REST APIs with OpenAPI specs
- Event-driven architecture with Kafka
- OAuth/OIDC authentication & authorization
- Payment integrations (Stripe, PayPal)
- Third-party API integrations
- Outcomes: 99.9% uptime, cost-aware infrastructure, clean API contracts, comprehensive test coverage

2. Frontend Development
- Next.js/React,Vue,Angular with TypeScript
- Component libraries (shadcn/ui, Tailwind)
- Server-Side Rendering (SSR) & ISR
- Responsive design & mobile-first approach
- Web accessibility (WCAG 2.2 AA)
- Performance optimization
- Outcomes: Lighthouse scores > 90, LCP < 2.5s, accessible to all users

3. Mobile Development
- React Native & Expo
- Native modules when needed
- Over-the-air (OTA) updates
- Offline-first architecture
- Push notifications
- App Store & Play Store submission
- Outcomes: Single codebase for iOS & Android, 60fps performance, high app store ratings

4. AI & Machine Learning
- RAG systems & LLM agents
- Recommendation engines
- Natural language processing
- Computer vision solutions
- ML pipeline orchestration
- Model monitoring & retraining
- Outcomes: Measurable business impact, scalable inference, responsible AI practices

5. Cloud & DevOps
- AWS/GCP/Azure infrastructure
- Infrastructure as Code (Terraform)
- Kubernetes & container orchestration
- CI/CD pipeline automation
- Observability & monitoring
- SRE practices & incident response
- Outcomes: 99.9%+ uptime SLAs, optimized cloud costs, automated deployments

6. Data & Analytics
- ETL/ELT pipeline development
- Data warehousing (Snowflake, BigQuery)
- dbt transformations
- Self-serve BI dashboards
- Data quality monitoring
- Real-time streaming analytics
- Outcomes: Single source of truth, self-serve analytics, data-driven decisions

7. Design (UX/UI)
- User research & personas
- Information architecture
- Wireframes & prototypes
- Visual design & branding
- Design systems
- Usability testing
- Outcomes: Increased conversion rates, reduced support tickets, consistent brand experience

8. Product Management
- Product discovery & validation
- Roadmap planning
- OKR definition & tracking
- Backlog management
- Analytics instrumentation
- Stakeholder communication
- Outcomes: Clear product vision, measurable outcomes, aligned stakeholders

9. QA & Testing
- Manual and automated testing
- Test strategy and planning
- End-to-end testing (Cypress, Playwright)
- API testing and validation
- Performance and load testing
- Mobile app testing
- Regression testing
- Bug tracking and reporting
- Outcomes: Higher code quality, fewer production bugs, faster release cycles

10. Security & Pentesting
- Penetration testing (web, mobile, API)
- Vulnerability assessments
- Security audits and code reviews
- OWASP Top 10 compliance
- Security best practices implementation
- Incident response planning
- Compliance support (SOC 2, GDPR)
- Outcomes: Secure applications, compliance readiness, reduced security risks

OUR PROCESS:
1. Discover - Deep dive into goals, users, and technical requirements
2. Design - Create intuitive experiences and scalable architecture
3. Build - Ship production-ready code with clean contracts and strong tests
4. Launch - Deploy with confidence using CI/CD and observability
5. Scale - Iterate based on metrics, user feedback, and business goals

WHY CHOOSE BLUNOVA:
- Product Development: Launch your MVP in weeks with battle-tested patterns
- Talent Placement: Hire vetted engineers to fill gaps in your team
- Senior Expertise: Work with experienced professionals who have shipped before
- Flexible Engagement: Choose project-based or staff augmentation

ENGAGEMENT OPTIONS:
- Project-based: Fixed scope projects with clear deliverables
- Staff augmentation: Embed our engineers in your team
- Retainer: Ongoing support and development

CONTACT:
- Book a discovery call at /book
- View our portfolio at /portfolio
`;

interface IntentAnalysis {
    intentScore: number;
    buyingSignals: string[];
    customerNeeds: string[];
    suggestedAction: string;
}

async function analyzeIntent(
    message: string,
    conversationHistory: Array<{ role: string; content: string }>
): Promise<IntentAnalysis> {
    const intentPrompt = `You are an expert sales intent analyzer. Analyze the following conversation and the latest customer message to determine their purchase intent.

Conversation history:
${conversationHistory.map((m) => `${m.role}: ${m.content}`).join("\n")}

Latest customer message: "${message}"

Analyze and respond with ONLY valid JSON (no markdown, no explanation) in this exact format:
{
  "intentScore": <number 0-100>,
  "buyingSignals": [<list of specific buying signals detected>],
  "customerNeeds": [<list of identified customer needs/pain points>],
  "suggestedAction": "<recommended follow-up action>"
}

Intent Score Guidelines:
- 0-20: Just browsing, general questions, no buying intent
- 21-40: Mild interest, gathering information
- 41-60: Moderate interest, comparing options, considering purchase
- 61-80: Strong interest, asking about pricing/timeline/process
- 81-100: Very high intent, ready to buy, asking to get started, sharing contact info, requesting quotes

Look for signals like:
- Asking about pricing, costs, quotes
- Inquiring about timelines, availability
- Sharing budget information
- Asking how to get started or next steps
- Requesting demos, trials, consultations
- Sharing contact information
- Expressing urgency or deadlines
- Comparing with competitors (shows active evaluation)
- Asking detailed technical/implementation questions`;

    try {
        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: intentPrompt }],
            temperature: 0.3,
            max_tokens: 500,
        });

        const response = completion.choices[0]?.message?.content || "";
        const jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return {
                intentScore: Math.min(100, Math.max(0, parsed.intentScore || 0)),
                buyingSignals: parsed.buyingSignals || [],
                customerNeeds: parsed.customerNeeds || [],
                suggestedAction: parsed.suggestedAction || "Continue engaging",
            };
        }
    } catch (error) {
        console.error("Intent analysis error:", error);
    }

    return {
        intentScore: 20,
        buyingSignals: [],
        customerNeeds: [],
        suggestedAction: "Continue engaging",
    };
}

export async function POST(request: NextRequest) {
    try {
        const { message, conversationHistory, customerInfo } = await request.json();

        const intentAnalysis = await analyzeIntent(message, conversationHistory || []);
        const highIntent = intentAnalysis.intentScore >= 50;

        const systemPrompt = `You are Blu, the AI assistant for Blunova. You have complete knowledge about the company and must answer questions accurately based on this information:

${COMPANY_KNOWLEDGE}

GUIDELINES:
- Be friendly, professional, and concise (2-3 sentences max)
- Answer questions accurately based on the company knowledge above
- If asked about services, provide specific details from the knowledge base
- If asked about pricing, explain that pricing depends on project scope and encourage booking a discovery call
- If someone shows buying intent, encourage them to book a discovery call or share their contact details
- Never make up information not in the knowledge base
- If you don't know something, say so and offer to connect them with the team
- Highlight relevant services based on what the customer is asking about

Current customer info: ${JSON.stringify(customerInfo || {})}
Detected buying signals: ${intentAnalysis.buyingSignals.join(", ") || "None yet"}
Customer needs identified: ${intentAnalysis.customerNeeds.join(", ") || "Still discovering"}`;

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
            max_tokens: 300,
        });

        const aiResponse =
            completion.choices[0]?.message?.content ||
            "I'd love to help you! Could you tell me more about what you're looking for?";

        if (highIntent) {
            try {
                await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/whatsapp`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        customerMessage: message,
                        conversationSummary: conversationHistory
                            ?.slice(-5)
                            .map((m: { role: string; content: string }) => `${m.role}: ${m.content}`)
                            .join("\n"),
                        intentScore: intentAnalysis.intentScore,
                        intentAnalysis,
                        customerInfo,
                    }),
                });
            } catch (whatsappError) {
                console.error("Failed to send WhatsApp notification:", whatsappError);
            }
        }

        return NextResponse.json({
            message: aiResponse,
            intentScore: intentAnalysis.intentScore,
            highIntent,
            buyingSignals: intentAnalysis.buyingSignals,
            customerNeeds: intentAnalysis.customerNeeds,
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            {
                message: "I'm having a moment! Please try again or reach out to us directly.",
                intentScore: 0,
                highIntent: false,
            },
            { status: 500 }
        );
    }
}
