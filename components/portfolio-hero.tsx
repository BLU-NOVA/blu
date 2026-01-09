import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, Code, Smartphone, Globe } from "lucide-react";

export function PortfolioHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Live Portfolio</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            See Our Work
            <span className="text-primary"> in Action</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Don't just take our word for it. Explore our live projects, try
            interactive demos, and experience the quality of our work firsthand.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Browse Projects
            </Button>
          </div> */}

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <span className="font-medium">15+ Live Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              <span className="font-medium">Mobile First</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-medium">Global Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
