import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Code, Lightbulb } from "lucide-react";

export function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Tech Blog</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insights & 
            <span className="text-primary"> Innovation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Stay updated with the latest in web development, AI, and technology. 
            Our team shares insights, tutorials, and thoughts on building modern applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline">
              Browse Articles
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Articles</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">10K+</span>
              </div>
              <p className="text-sm text-muted-foreground">Readers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">25+</span>
              </div>
              <p className="text-sm text-muted-foreground">Tutorials</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">Weekly</span>
              </div>
              <p className="text-sm text-muted-foreground">Updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}