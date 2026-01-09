"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Play,
  Code,
  Smartphone,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
export function InteractiveDemo() {
  const router = useRouter();
  const demos = [
    {
      title: "E-Commerce Platform",
      description:
        "Experience our modern shopping interface with real-time inventory and checkout.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment processing",
        "Order tracking",
      ],
      tech: ["Next.js", "Stripe", "Tailwind CSS"],
    },
    {
      title: "Task Management App",
      description:
        "Try our collaborative project management tool with real-time updates and team features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      features: [
        "Task boards",
        "Team collaboration",
        "Time tracking",
        "Analytics dashboard",
      ],
      tech: ["React", "Node.js", "WebSocket"],
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Explore our HIPAA-compliant healthcare management system with patient records.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      features: [
        "Patient records",
        "Appointment scheduling",
        "Telemedicine",
        "Analytics",
      ],
      tech: ["React", "Python", "PostgreSQL"],
    },
  ];

  const capabilities = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance with sub-2 second load times",
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Built with security best practices and compliance in mind",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Intuitive interfaces that delight users and drive engagement",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Interactive Demos</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try Our Work
            <span className="text-primary"> Yourself</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just look at screenshots. Interact with our live demos and
            experience the quality of our work firsthand.
          </p>
        </div>

        <Tabs defaultValue="demos" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="demos">Live Demos</TabsTrigger>
            <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
          </TabsList>

          <TabsContent value="demos" className="mt-8">
            <div className="grid gap-8">
              {demos.map((demo, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Demo Preview */}
                      <div className="relative">
                        <img
                          src={demo.image}
                          alt={demo.title}
                          className="w-full h-full object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Button size="lg" className="gap-2">
                            <Play className="h-5 w-5" />
                            Launch Demo
                          </Button>
                        </div> */}
                      </div>

                      {/* Demo Info */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold mb-3">
                          {demo.title}
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          {demo.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {demo.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-2"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Built With</h4>
                          <div className="flex flex-wrap gap-2">
                            {demo.tech.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {/* 
                        <Button className="w-full gap-2">
                          Try Interactive Demo
                          <ArrowRight className="h-4 w-4" />
                        </Button> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="capabilities" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {capabilities.map((capability, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <capability.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{capability.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to See More?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a personalized demo and see how we can bring your
                  vision to life.
                </p>
                <Button
                  onClick={() => router.push("/book")}
                  size="lg"
                  className="gap-2"
                >
                  Schedule Live Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
