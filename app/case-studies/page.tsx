import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Bell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies - Coming Soon | Blunova",
  description:
    "Detailed case studies showcasing our work are coming soon. See how we've helped startups launch successful products.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <Badge className="mb-4">Coming Soon</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies
            <span className="text-primary"> Coming Soon</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're preparing detailed case studies showcasing our successful
            projects. In the meantime, check out our portfolio for a quick
            overview of our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg">View Portfolio</Button>
            </Link>
            <Link href="/book">
              <Button size="lg" variant="outline" className="gap-2">
                <Bell className="w-4 h-4" />
                Get Notified
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
