import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioPageContent } from "@/components/portfolio-page-content"

export const metadata: Metadata = {
  title: "Portfolio - Blunova",
  description: "Four projects across wellness, community, gaming, and property management.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PortfolioPageContent />
      <Footer />
    </div>
  )
}
