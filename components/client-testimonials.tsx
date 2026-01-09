import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Quote, Users, Calendar, Award } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  video: string;
  rating: number;
  testimonial: string;
  project: string;
  date: string;
  category: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "PayFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    video: "https://example.com/video1",
    rating: 5,
    testimonial: "Blunova transformed our fintech vision into reality. Their team delivered a complete platform in just 8 weeks, and we've already onboarded 50,000+ users. The technical expertise and project management were outstanding.",
    project: "FinTech MVP Launch",
    date: "2024-01-15",
    category: "FinTech"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Founder",
    company: "Urban Style Co",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    video: "https://example.com/video2",
    rating: 5,
    testimonial: "Our e-commerce platform was struggling with performance and conversion rates. Blunova rebuilt it from scratch, and our conversion rate increased by 40%. The ROI has been incredible.",
    project: "E-Commerce Platform",
    date: "2024-01-10",
    category: "E-Commerce"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "Medical Director",
    company: "MediConnect",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    video: "https://example.com/video3",
    rating: 5,
    testimonial: "As a healthcare provider, security and compliance were our top priorities. Blunova delivered a HIPAA-compliant system that exceeded our expectations. Patient satisfaction scores increased by 35%.",
    project: "Healthcare SaaS",
    date: "2024-01-05",
    category: "HealthTech"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "TechStart Inc",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    video: "https://example.com/video4",
    rating: 5,
    testimonial: "We needed a mobile app that could scale to millions of users. Blunova's architecture and development approach were spot-on. The app handles 100K+ daily active users without any issues.",
    project: "Mobile App Development",
    date: "2023-12-20",
    category: "Mobile"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Product Manager",
    company: "DataFlow Analytics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    video: "https://example.com/video5",
    rating: 5,
    testimonial: "The AI integration Blunova built for our analytics platform has been a game-changer. Our users love the insights, and we've seen a 60% increase in engagement since launch.",
    project: "AI Analytics Platform",
    date: "2023-12-15",
    category: "AI/ML"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Operations Director",
    company: "LogiTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    video: "https://example.com/video6",
    rating: 5,
    testimonial: "Blunova's team integrated seamlessly with our existing systems. The custom dashboard they built has saved us countless hours and improved our operational efficiency by 45%.",
    project: "Custom Dashboard",
    date: "2023-12-10",
    category: "Enterprise"
  }
];

export function ClientTestimonials() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" },
    { icon: Award, label: "Awards Won", value: "12" },
    { icon: Calendar, label: "Years Experience", value: "5+" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our
            <span className="text-primary"> Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our clients about their experience working with Blunova. 
            Their success is our success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden group">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative h-48">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="lg" className="gap-2">
                      <Play className="h-5 w-5" />
                      Watch
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4">{testimonial.category}</Badge>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 px-2 py-1 rounded">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-white">{testimonial.rating}</span>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{testimonial.project}</span>
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you achieve your goals and become our next success story.
            </p>
            <Button size="lg" className="gap-2">
              Schedule a Consultation
              <Play className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}