import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, BookOpen, TrendingUp, Code, Users, Star } from "lucide-react";

export function NewsletterSection() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Weekly Tutorials",
      description: "Step-by-step guides on modern web development"
    },
    {
      icon: TrendingUp,
      title: "Industry Insights",
      description: "Latest trends and best practices in tech"
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Practical code snippets and templates"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join our developer community and network"
    }
  ];

  const stats = [
    { label: "Subscribers", value: "10,000+" },
    { label: "Open Rate", value: "45%" },
    { label: "Satisfaction", value: "98%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-4">Newsletter</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with
                  <span className="text-primary"> Latest Tech</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join 10,000+ developers getting weekly insights, tutorials, and exclusive content on modern web development.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>

              {/* Newsletter Form */}
              <div className="max-w-md mx-auto mb-8">
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button className="gap-2">
                    <Mail className="h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 text-primary" />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}