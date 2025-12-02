"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Smartphone, Users, Globe, Gamepad2, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: "turnip",
    name: "Turnip",
    tagline: "Accountability & Wellness Platform",
    icon: Smartphone,
    tags: ["Mobile (iOS / Android)", "Mobile Engineer"],
    url: "https://myturnip.com/",
    overview:
      "Turnip helps people connect with accountability partners during weight-loss or wellness journeys, fostering community through safe, private matches.",
    responsibilities: [
      "Designed and built core mobile app flows (profile, matching, chat)",
      "Integrated secure messaging and push notifications",
      "Optimized for performance and user retention",
    ],
    outcomes: [
      "Successfully launched to early users via waitlist",
      "Fostered engaged community through real-time, private matches",
      "Strengthened credentials in building socially-driven applications",
    ],
    color: "from-primary/20 to-secondary/20",
  },
  {
    id: "auggie",
    name: "Auggie App",
    tagline: "Parenting & Community App",
    icon: Users,
    tags: ["Mobile", "Lead Developer"],
    overview:
      "Auggie is a platform connecting parents via content, advice, community features, and trusted resources to navigate the parenting journey together.",
    responsibilities: [
      "Developed onboarding, content feed, chat, and recommendation features",
      "Led mobile engineering decisions and team coordination",
      "Implemented analytics and engagement tracking",
    ],
    outcomes: [
      "Delivered a full-featured MVP within tight timeline",
      "Built scalable foundation for future growth",
      "Enabled data-driven product decisions",
    ],
    color: "from-secondary/20 to-primary/20",
  },
  {
    id: "afrikanest",
    name: "Afrikanest",
    tagline: "Property Management SaaS Platform",
    icon: Globe,
    tags: ["Full-Stack", "Technical Lead"],
    overview:
      "Afrikanest is a comprehensive property management platform built to streamline operations for landlords and property managers across Africa.",
    responsibilities: [
      "Architected full-stack platform with multi-tenant support",
      "Built payment processing and invoicing systems",
      "Implemented property listing and tenant management",
    ],
    outcomes: [
      "Launched SaaS platform serving multiple property managers",
      "Reduced manual processes through automation",
      "Created scalable architecture for regional expansion",
    ],
    color: "from-primary/20 to-secondary/20",
  },
  {
    id: "daily-dog-fights",
    name: "Daily Dog Fights",
    tagline: "Pet Competition & Social Gaming",
    icon: Gamepad2,
    tags: ["Mobile", "Full-Stack"],
    overview:
      "A fun, engaging mobile game where pet owners compete in daily challenges, vote on pet photos, and climb leaderboards in a family-friendly environment.",
    responsibilities: [
      "Built gamification system with daily challenges and rewards",
      "Implemented voting mechanics and leaderboard system",
      "Created social features for community engagement",
    ],
    outcomes: [
      "Achieved high user engagement and retention",
      "Built viral sharing mechanics driving organic growth",
      "Established recurring revenue through premium features",
    ],
    color: "from-secondary/20 to-primary/20",
  },
]

export function PortfolioPageContent() {
  const [activeProject, setActiveProject] = useState("turnip")
  const project = projects.find((p) => p.id === activeProject)!

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="text-primary">✨</span>
              <span className="text-sm text-muted-foreground">Selected Works</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Four Projects. Four Domains. <span className="gradient-text">One Team.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From mobile applications to full SaaS systems — explore our work across wellness, community, gaming, and
              property management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Selector */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setActiveProject(p.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "glass-card p-6 text-left transition-all",
                  activeProject === p.id ? "border-primary bg-card" : "hover:border-muted-foreground/30",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    activeProject === p.id ? "bg-primary/20" : "bg-muted",
                  )}
                >
                  <p.icon
                    className={cn("w-6 h-6", activeProject === p.id ? "text-primary" : "text-muted-foreground")}
                  />
                </div>
                <h3
                  className={cn(
                    "font-semibold mb-1",
                    activeProject === p.id ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {p.name}
                </h3>
                <p className="text-muted-foreground text-sm">{p.tagline}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={cn("rounded-2xl p-8 bg-gradient-to-br", project.color)}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-card flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{project.name}</h2>
                  <p className="text-muted-foreground">{project.tagline}</p>
                </div>
              </div>
              {project.url && (
                <Button variant="heroOutline" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Visit Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div className="glass-card p-6 mb-6">
              <h3 className="text-foreground font-semibold mb-3">Overview</h3>
              <p className="text-muted-foreground">{project.overview}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-foreground font-semibold mb-4">Key Responsibilities</h3>
                <ul className="space-y-3">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-foreground font-semibold mb-4">Impact & Outcomes</h3>
                <ul className="space-y-3">
                  {project.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
