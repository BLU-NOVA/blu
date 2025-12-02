"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Users,
  Target,
  Globe,
  Activity,
  Sparkles,
  Clock,
  Bug,
  Rocket,
  Star,
  Eye,
  LayoutDashboard,
  FileText,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const differentiators = [
  {
    title: "Senior talent only",
    description:
      "Lead engineers, designers, and PMs with 5+ years of experience and proven delivery records. No juniors, no outsourced teams.",
    icon: Users,
  },
  {
    title: "End-to-end ownership",
    description:
      "From strategy and UX to infrastructure and QA. We take full responsibility for outcomes, not just outputs.",
    icon: Target,
  },
  {
    title: "Africa-born, global delivery",
    description:
      "Cost-efficient without compromising quality. Timezone-friendly collaboration. World-class engineering standards.",
    icon: Globe,
  },
  {
    title: "Observable engineering",
    description:
      "CI/CD, monitoring, SLOs, incident playbooks, and cost guardrails built into every project from day one.",
    icon: Activity,
  },
  {
    title: "AI-accelerated delivery",
    description:
      "We use AI responsibly to speed research, testing, and support—so we can focus on what matters: solving your problems.",
    icon: Sparkles,
  },
]

const stats = [
  { value: "6-10", suffix: " weeks", label: "Average Time to MVP", icon: Clock },
  { value: "<1%", suffix: " P1", label: "Post-Launch Defect Rate", icon: Bug },
  { value: "Daily", suffix: "/Weekly", label: "Deploy Frequency", icon: Rocket },
  { value: "4.8", suffix: "/5.0", label: "Client Satisfaction", icon: Star },
]

const transparency = [
  {
    title: "Weekly Demos",
    description: "See working software every week. No surprises.",
    icon: Eye,
  },
  {
    title: "Shared Dashboards",
    description: "Real-time visibility into progress, velocity, and blockers.",
    icon: LayoutDashboard,
  },
  {
    title: "Clear SLAs",
    description: "Committed response times, uptime guarantees, and escalation paths.",
    icon: FileText,
  },
  {
    title: "Transparent Pricing",
    description: "Fixed-scope projects or time-and-materials. No hidden fees.",
    icon: DollarSign,
  },
]

export function WhyUsPageContent() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Why Blunova</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Africa-born, world-class engineering partner. We combine senior talent, transparent delivery, and
              observable practices to help you ship faster.
            </p>
            <Button variant="hero" size="lg">
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-muted-foreground">More than a dev shop. A true engineering partner.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Proven Track Record</h2>
            <p className="text-muted-foreground">Metrics that matter. Results you can measure.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">
                  <span className="gradient-text">{stat.value}</span>
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Delivery */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Delivery</h2>
            <p className="text-muted-foreground">You always know where we stand. No black boxes, no guesswork.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transparency.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
