import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Users, Award } from "lucide-react";

export function CaseStudiesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4">Success Stories</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Real Results for
            <span className="text-primary"> Real Clients</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We've helped 50+ startups and enterprises launch successful products. 
            See how we've transformed ideas into market leaders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">50+</span>
              </div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">$10M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">98%</span>
              </div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-3xl font-bold">8</span>
              </div>
              <p className="text-sm text-muted-foreground">Weeks Average Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}