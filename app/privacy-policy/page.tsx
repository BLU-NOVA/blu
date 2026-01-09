import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy | Blunova",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Privacy Policy
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
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="mb-4">
                At Blunova ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              <p className="mb-4">We may collect personally identifiable information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Business information (company name, job title, industry)</li>
                <li>Project details and requirements</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
              <p className="mb-4">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent</li>
                <li>Referral sources</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>To provide and deliver our services</li>
                <li>To communicate with you about projects and updates</li>
                <li>To process payments and manage billing</li>
                <li>To improve our website and services</li>
                <li>To send marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access: Request a copy of your personal data</li>
                <li>Rectification: Request correction of inaccurate data</li>
                <li>Erasure: Request deletion of your personal data</li>
                <li>Restriction: Request limitation of processing</li>
                <li>Portability: Request transfer of your data</li>
                <li>Objection: Object to processing based on legitimate interests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your experience on our website. Cookies help us remember your preferences, analyze site traffic, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites or integrate with third-party services (such as payment processors or analytics tools). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Email:</strong> privacy@blunovatech.com</p>
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