import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SolutionsPageContent } from "@/components/solutions-page-content"

export const metadata: Metadata = {
  title: "Solutions - Blunova",
  description: "Full-stack solutions across Backend, Frontend, Mobile, AI/ML, Cloud, Data, Design, and Product.",
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SolutionsPageContent />
      <Footer />
    </div>
  )
}
