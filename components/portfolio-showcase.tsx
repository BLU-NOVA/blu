import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Play,
  Code,
  Smartphone,
  Globe,
  Star,
  Users,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  liveUrl: string;
  demoUrl: string;
  tech: string[];
  metrics: {
    users?: string;
    rating?: string;
    status: string;
  };
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow Pro",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    description:
      "Advanced project management tool with real-time collaboration and AI-powered insights.",
    liveUrl: "https://taskflow-demo.vercel.app",
    demoUrl: "https://taskflow-demo.vercel.app/demo",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    metrics: {
      users: "10K+",
      rating: "4.8",
      status: "Live",
    },
    features: [
      "Real-time sync",
      "AI suggestions",
      "Team analytics",
      "Mobile app",
    ],
  },
  {
    id: 2,
    title: "ShopHub E-Commerce",
    category: "E-Commerce",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description:
      "Modern e-commerce platform with advanced filtering, inventory management, and analytics.",
    liveUrl: "https://shophub-demo.vercel.app",
    demoUrl: "https://shophub-demo.vercel.app/admin",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    metrics: {
      users: "50K+",
      rating: "4.9",
      status: "Live",
    },
    features: [
      "Multi-vendor",
      "Real-time inventory",
      "Advanced analytics",
      "Mobile PWA",
    ],
  },
  {
    id: 3,
    title: "HealthTrack",
    category: "HealthTech",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    description:
      "Comprehensive health tracking app with wearable integration and telemedicine features.",
    liveUrl: "https://healthtrack-demo.vercel.app",
    demoUrl: "https://healthtrack-demo.vercel.app/onboarding",
    tech: ["React Native", "Firebase", "TensorFlow", "WebRTC"],
    metrics: {
      users: "25K+",
      rating: "4.7",
      status: "Live",
    },
    features: [
      "Wearable sync",
      "Video consultations",
      "AI health insights",
      "FDA compliant",
    ],
  },
];

export function PortfolioShowcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured
            <span className="text-primary"> Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest work. Each project demonstrates our expertise in
            different technologies and industries.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge>{project.category}</Badge>
                      <Badge variant="secondary" className="gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {project.metrics.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-4 mb-6">
                      {project.metrics.users && (
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">
                            {project.metrics.users}
                          </span>
                        </div>
                      )}
                      {project.metrics.rating && (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">
                            {project.metrics.rating}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    {/* <div className="flex gap-3">
                      <Button className="gap-2 flex-1">
                        <ExternalLink className="h-4 w-4" />
                        View Live
                      </Button>
                      <Button variant="outline" className="gap-2">
                        <Play className="h-4 w-4" />
                        Demo
                      </Button>
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
