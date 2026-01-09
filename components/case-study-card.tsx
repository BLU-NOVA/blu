import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, DollarSign, Clock, TrendingUp } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  results: {
    users: string;
    revenue: string;
    timeline: string;
    satisfaction: string;
  };
  services: string[];
  challenge: string;
  solution: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4">{study.category}</Badge>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
              <p className="text-muted-foreground">{study.client}</p>
            </div>

            <p className="text-muted-foreground mb-6">{study.description}</p>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{study.results.users}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{study.results.revenue}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{study.results.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{study.results.satisfaction}</span>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-2 mb-6">
              {study.services.map((service) => (
                <Badge key={service} variant="secondary">
                  {service}
                </Badge>
              ))}
            </div>

            <Button className="w-full">View Full Case Study</Button>
          </div>
        </div>

        {/* Detailed Content (Hidden by default, expandable) */}
        <div className="border-t p-6 md:p-8 bg-muted/30">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">The Challenge</h4>
              <p className="text-muted-foreground text-sm">{study.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Our Solution</h4>
              <p className="text-muted-foreground text-sm">{study.solution}</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-8 p-6 bg-background rounded-lg border">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <blockquote className="text-muted-foreground italic mb-3">
                  "{study.testimonial.quote}"
                </blockquote>
                <cite className="text-sm font-medium not-italic">
                  {study.testimonial.author}, {study.testimonial.role}
                </cite>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}