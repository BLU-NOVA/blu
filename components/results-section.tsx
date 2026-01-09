import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Clock, Target, Zap } from "lucide-react";

export function ResultsSection() {
  const metrics = [
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average ROI",
      description: "Clients see 3x return on investment within 6 months"
    },
    {
      icon: Users,
      value: "1M+",
      label: "End Users",
      description: "Our products serve over a million users globally"
    },
    {
      icon: DollarSign,
      value: "$10M+",
      label: "Revenue Created",
      description: "Total revenue generated for our clients"
    },
    {
      icon: Clock,
      value: "50%",
      label: "Faster Launch",
      description: "Launch products 2x faster than traditional development"
    }
  ];

  const achievements = [
    "10+ Products Launched Successfully",
    "100% Client Satisfaction Rate",
    "50+ Happy Customers Worldwide",
    "8-Week Average Delivery Time",
    "98% On-Time Project Completion",
    "5-Star Client Reviews"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Proven Results</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That Speak
            <span className="text-primary"> for Themselves</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We don't just build products, we deliver measurable results that drive business growth.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{metric.value}</div>
                <div className="font-semibold mb-2">{metric.label}</div>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Our Achievements</h3>
              <p className="text-muted-foreground">
                Recognition and milestones that demonstrate our commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-medium">Goal-Oriented</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">Client-Focused</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}