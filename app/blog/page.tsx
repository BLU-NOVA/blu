import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Bell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Coming Soon | Blunova",
  description:
    "Our tech blog is coming soon. Stay tuned for insights, tutorials, and thoughts on modern web development, AI, and technology trends.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
          <Badge className="mb-4">Coming Soon</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog is
            <span className="text-primary"> Coming Soon</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We're working on bringing you insightful articles, tutorials, and
            thoughts on modern software development, AI, and technology trends.
            Stay tuned!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="gap-2">
                <Bell className="w-4 h-4" />
                Get Notified
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
