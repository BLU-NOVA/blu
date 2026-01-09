import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service | Blunova",
  description: "Our terms of service outline the rules and regulations for using our software development services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using Blunova's services ("Services"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Description of Services</h2>
              <p className="mb-4">
                Blunova provides software development services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Web application development</li>
                <li>Mobile application development</li>
                <li>API development and integration</li>
                <li>UI/UX design services</li>
                <li>AI and machine learning solutions</li>
                <li>DevOps and cloud infrastructure</li>
                <li>Quality assurance and testing</li>
                <li>Maintenance and support services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <p className="mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide accurate and complete project requirements</li>
                <li>Provide necessary access to systems, data, and resources</li>
                <li>Review and provide feedback on deliverables in a timely manner</li>
                <li>Respect intellectual property rights</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Pay invoices according to agreed terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>

              <h3 className="text-xl font-semibold mb-3">Our Intellectual Property</h3>
              <p className="mb-4">
                All content, features, and functionality of our services, including but not limited to software, designs, text, graphics, logos, and code, are owned by Blunova and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3">Client Intellectual Property</h3>
              <p className="mb-4">
                You retain ownership of any intellectual property rights you provide to us. By providing materials, you grant us a license to use them solely for the purpose of providing our services.
              </p>

              <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
              <p className="mb-4">
                Upon full payment, we transfer ownership of deliverables to you, subject to any third-party licenses or open-source components used in the project.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Pricing and Payment</h2>

              <h3 className="text-xl font-semibold mb-3">Project Pricing</h3>
              <p className="mb-4">
                Project pricing is determined based on project scope, complexity, and timeline. All prices are quoted in USD unless otherwise specified and are subject to change based on scope modifications.
              </p>

              <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>50% upfront payment for project initiation</li>
                <li>25% upon completion of major milestones</li>
                <li>25% upon final delivery and acceptance</li>
                <li>Payment due within 30 days of invoice date</li>
                <li>Late payments may incur additional charges</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Refunds</h3>
              <p className="mb-4">
                Refunds are provided only if we are unable to deliver the agreed-upon services. Refunds do not apply to completed work or third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Timeline and Delivery</h2>
              <p className="mb-4">
                We strive to deliver projects according to agreed timelines. However, timelines may be affected by factors such as scope changes, client feedback delays, or unforeseen technical challenges. We will communicate any timeline changes promptly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Confidentiality</h2>
              <p className="mb-4">
                Both parties agree to maintain confidentiality of proprietary information, trade secrets, and sensitive data shared during the course of our business relationship. This obligation survives termination of our agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Warranties and Liability</h2>

              <h3 className="text-xl font-semibold mb-3">Service Warranty</h3>
              <p className="mb-4">
                We warrant that our services will be performed in a professional manner and in accordance with industry standards. We provide a 30-day warranty period for bug fixes on delivered code.
              </p>

              <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
              <p className="mb-4">
                Our liability is limited to the amount paid for our services. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="mb-4">
                Either party may terminate this agreement with 30 days written notice. Upon termination, you will pay for all services rendered up to the termination date. All provisions regarding confidentiality and intellectual property survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from this agreement will be resolved through good faith negotiations. If resolution cannot be reached, disputes will be subject to the jurisdiction of Kenyan courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="mb-4">
                This agreement is governed by the laws of Kenya. Any legal action or proceeding arising under this agreement will be brought exclusively in the courts of Kenya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong> legal@blunovatech.com</p>
                <p><strong>Phone:</strong> +254 795 512 357</p>
                <p><strong>Address:</strong> Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}