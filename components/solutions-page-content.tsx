"use client";

import { useEffect, useState } from "react";
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
  CheckCircle2,
  TestTube,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const solutions = [
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Reliable APIs and scalable server architecture that power your product.",
    icon: Server,
    whatWeDo: [
      "Microservices & monoliths (Node/NestJS, Go, Python, Java)",
      "GraphQL & REST APIs with OpenAPI specs",
      "Event-driven architecture with Kafka",
      "OAuth/OIDC authentication & authorization",
      "Payment integrations (Stripe, PayPal)",
      "Third-party API integrations",
    ],
    outcomes: [
      "Reliable APIs with 99.9% uptime",
      "Cost-aware infrastructure",
      "Clean API contracts",
      "Comprehensive test coverage",
    ],
    deliverables:
      "Architecture docs, API specs (OpenAPI), CI/CD pipelines, observability dashboards, runbooks",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Fast, accessible, and beautiful interfaces that users love.",
    icon: Monitor,
    whatWeDo: [
      "Next.js/React with TypeScript",
      "Component libraries (shadcn/ui, Tailwind)",
      "Server-Side Rendering (SSR) & ISR",
      "Responsive design & mobile-first approach",
      "Web accessibility (WCAG 2.2 AA)",
      "Performance optimization",
    ],
    outcomes: [
      "Lighthouse scores > 90",
      "Fast page loads (LCP < 2.5s)",
      "Accessible to all users",
      "Analytics-ready instrumentation",
    ],
    deliverables:
      "Design system, component library, performance budgets, accessibility audit reports",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Native-quality mobile experiences across iOS and Android.",
    icon: Smartphone,
    whatWeDo: [
      "React Native & Expo",
      "Native modules when needed",
      "Over-the-air (OTA) updates",
      "Offline-first architecture",
      "Push notifications",
      "App Store & Play Store submission",
    ],
    outcomes: [
      "Single codebase for iOS & Android",
      "Fast iteration cycles",
      "Smooth 60fps performance",
      "High app store ratings",
    ],
    deliverables:
      "App binaries, OTA update configs, store listing assets, crash monitoring setup",
  },
  {
    id: "ai-ml",
    title: "Machine Learning & AI",
    description: "Intelligent features that learn and improve over time.",
    icon: Brain,
    whatWeDo: [
      "RAG systems & LLM agents",
      "Recommendation engines",
      "Natural language processing",
      "Computer vision solutions",
      "ML pipeline orchestration",
      "Model monitoring & retraining",
    ],
    outcomes: [
      "Measurable business impact",
      "Scalable inference pipelines",
      "Responsible AI practices",
      "Continuous model improvement",
    ],
    deliverables:
      "Model documentation, inference APIs, monitoring dashboards, A/B testing frameworks",
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Scalable infrastructure that grows with your business.",
    icon: Cloud,
    whatWeDo: [
      "AWS/GCP/Azure infrastructure",
      "Infrastructure as Code (Terraform)",
      "Kubernetes & container orchestration",
      "CI/CD pipeline automation",
      "Observability & monitoring",
      "SRE practices & incident response",
    ],
    outcomes: [
      "99.9%+ uptime SLAs",
      "Optimized cloud costs",
      "Fast incident resolution",
      "Automated deployments",
    ],
    deliverables:
      "IaC modules, runbooks, cost reports, incident playbooks, architecture diagrams",
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Turn raw data into actionable insights.",
    icon: Database,
    whatWeDo: [
      "ETL/ELT pipeline development",
      "Data warehousing (Snowflake, BigQuery)",
      "dbt transformations",
      "Self-serve BI dashboards",
      "Data quality monitoring",
      "Real-time streaming analytics",
    ],
    outcomes: [
      "Single source of truth",
      "Self-serve analytics",
      "Data-driven decisions",
      "Regulatory compliance",
    ],
    deliverables:
      "Data models, pipeline code, dashboard templates, data dictionary",
  },
  {
    id: "design",
    title: "Design (UX/UI)",
    description: "Beautiful, intuitive experiences that convert.",
    icon: Palette,
    whatWeDo: [
      "User research & personas",
      "Information architecture",
      "Wireframes & prototypes",
      "Visual design & branding",
      "Design systems",
      "Usability testing",
    ],
    outcomes: [
      "Increased conversion rates",
      "Reduced support tickets",
      "Consistent brand experience",
      "Faster design-to-dev handoff",
    ],
    deliverables:
      "Figma files, design system, prototype links, research reports",
  },
  {
    id: "product",
    title: "Product Management",
    description: "Strategic product thinking that drives results.",
    icon: ClipboardList,
    whatWeDo: [
      "Product discovery & validation",
      "Roadmap planning",
      "OKR definition & tracking",
      "Backlog management",
      "Analytics instrumentation",
      "Stakeholder communication",
    ],
    outcomes: [
      "Clear product vision",
      "Measurable outcomes",
      "Aligned stakeholders",
      "Data-informed decisions",
    ],
    deliverables: "PRDs, roadmaps, analytics dashboards, sprint reports",
  },
  {
    id: "qa",
    title: "QA & Testing",
    description: "Comprehensive testing to ensure quality at every release.",
    icon: TestTube,
    whatWeDo: [
      "Manual and automated testing",
      "Test strategy and planning",
      "End-to-end testing (Cypress, Playwright)",
      "API testing and validation",
      "Performance and load testing",
      "Mobile app testing",
    ],
    outcomes: [
      "Higher code quality",
      "Fewer production bugs",
      "Faster release cycles",
      "Comprehensive test coverage",
    ],
    deliverables:
      "Test plans, automated test suites, bug reports, coverage reports, CI integration",
  },
  {
    id: "security",
    title: "Security & Pentesting",
    description: "Protect your application and user data from threats.",
    icon: Shield,
    whatWeDo: [
      "Penetration testing (web, mobile, API)",
      "Vulnerability assessments",
      "Security audits and code reviews",
      "OWASP Top 10 compliance",
      "Security best practices implementation",
      "Compliance support (SOC 2, GDPR)",
    ],
    outcomes: [
      "Secure applications",
      "Compliance readiness",
      "Reduced security risks",
      "Incident response preparedness",
    ],
    deliverables:
      "Pentest reports, vulnerability assessments, remediation guides, security policies",
  },
];

export function SolutionsPageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState(tabParam || "backend");

  useEffect(() => {
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);

    // Update URL param without page reload
    const url = new URL(window.location.href);
    url.searchParams.set("tab", id);
    window.history.replaceState(null, "", url.toString());
  };

  const activeSolution = solutions.find((s) => s.id === activeTab)!;

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Full-Stack Solutions
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              End-to-end capabilities across Backend, Frontend, Mobile, AI/ML,
              Cloud, Data, Design, and Product.
            </p>
            <Link href="/book">
              <Button variant="hero" size="lg">
                Book a Discovery Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Sidebar */}
            <div className="space-y-2">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => handleTabChange(solution.id)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3",
                    activeTab === solution.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <solution.icon className="w-5 h-5" />
                  {solution.title}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <activeSolution.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {activeSolution.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {activeSolution.description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* What We Do */}
                <div>
                  <h3 className="text-foreground font-semibold mb-4">
                    What We Do
                  </h3>
                  <ul className="space-y-3">
                    {activeSolution.whatWeDo.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h3 className="text-foreground font-semibold mb-4">
                    Outcomes
                  </h3>
                  <ul className="space-y-3">
                    {activeSolution.outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="text-foreground font-semibold mb-2">
                  Deliverables
                </h4>
                <p className="text-muted-foreground text-sm">
                  {activeSolution.deliverables}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
