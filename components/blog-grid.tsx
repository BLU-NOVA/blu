import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
}

const articles: Article[] = [
  {
    id: 1,
    title: "Building Scalable Next.js Apps in 2024",
    excerpt: "Learn how to architect Next.js applications that can handle millions of users. From server components to edge optimization.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    featured: true,
    tags: ["Next.js", "React", "Performance"]
  },
  {
    id: 2,
    title: "AI Integration in Modern Web Apps",
    excerpt: "Practical guide to integrating AI models into your web applications. From chatbots to content generation.",
    author: "Michael Rodriguez",
    date: "2024-01-12",
    readTime: "12 min",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    featured: true,
    tags: ["AI", "Machine Learning", "APIs"]
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Teams",
    excerpt: "How to structure TypeScript projects for maximum maintainability and team collaboration.",
    author: "Emily Watson",
    date: "2024-01-10",
    readTime: "6 min",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop",
    featured: false,
    tags: ["TypeScript", "Best Practices", "Team Work"]
  },
  {
    id: 4,
    title: "Performance Optimization Guide",
    excerpt: "Complete guide to optimizing web applications for speed and user experience.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "10 min",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    featured: false,
    tags: ["Performance", "Optimization", "Web Vitals"]
  },
  {
    id: 5,
    title: "Mobile-First Development Strategies",
    excerpt: "Why mobile-first approach is crucial and how to implement it effectively in your projects.",
    author: "Lisa Anderson",
    date: "2024-01-05",
    readTime: "7 min",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    featured: false,
    tags: ["Mobile", "Responsive Design", "UX"]
  },
  {
    id: 6,
    title: "Security in Modern Web Applications",
    excerpt: "Essential security practices every developer should know when building web applications.",
    author: "James Wilson",
    date: "2024-01-03",
    readTime: "9 min",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    featured: false,
    tags: ["Security", "Best Practices", "Web Development"]
  }
];

export function BlogGrid() {
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4">Featured</Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{article.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 left-2 text-xs">{article.category}</Badge>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">{article.author}</span>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            Load More Articles
            <TrendingUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}