import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhyUsPageContent } from "@/components/why-us-page-content"

export const metadata: Metadata = {
  title: "Why Us - Blunova",
  description:
    "Africa-born, world-class engineering partner. Senior talent, transparent delivery, and observable practices.",
}

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhyUsPageContent />
      <Footer />
    </div>
  )
}
