"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Monitor,
  Smartphone,
  Brain,
  Cloud,
  Database,
  Palette,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Microservices & APIs with Node/NestJS, Go, Python, Java. Event-driven architecture, auth, payments, integrations.",
    icon: Server,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Modern web apps with Next.js/React, component libraries, SSR/ISR, and accessibility-first design.",
    icon: Monitor,
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description:
      "Cross-platform apps with React Native/Expo. Consistent UX, offline-first, and seamless app store delivery.",
    icon: Smartphone,
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description:
      "RAG systems, LLM agents, personalization, and ML pipelines with measurable business impact.",
    icon: Brain,
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description:
      "AWS/GCP/Azure infrastructure, IaC with Terraform, CI/CD pipelines, observability, and SRE practices.",
    icon: Cloud,
  },
  {
    id: "data",
    title: "Data & Analytics",
    description:
      "ETL/ELT pipelines, data warehousing, dbt transformations, and self-serve BI dashboards.",
    icon: Database,
  },
  {
    id: "design",
    title: "Design",
    description:
      "UX research, IA, wireframes, visual design, and design systems that drive conversion.",
    icon: Palette,
  },
  {
    id: "product",
    title: "Product Management",
    description:
      "Discovery, roadmaps, OKRs, backlog management, and analytics instrumentation for measurable outcomes.",
    icon: ClipboardList,
  },
];

export function ServicesSection() {
  return (
    <section id="solutions" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-3">Full-Stack Excellence</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Launch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end expertise across the entire product development lifecycle
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={`/solutions?tab=${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="service-card group cursor-pointer"
            >
              <div className="mb-4">
                <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {service.description}
              </p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
