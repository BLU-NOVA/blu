"use client"

import { motion } from "framer-motion"
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react"

const processSteps = [
  {
    title: "Discover",
    description: "Deep dive into your goals, users, and technical requirements",
    icon: Search,
  },
  {
    title: "Design",
    description: "Create intuitive experiences and scalable architecture",
    icon: Palette,
  },
  {
    title: "Build",
    description: "Ship production-ready code with clean contracts and strong tests",
    icon: Code,
  },
  {
    title: "Launch",
    description: "Deploy with confidence using CI/CD and observability",
    icon: Rocket,
  },
  {
    title: "Scale",
    description: "Iterate based on metrics, user feedback, and business goals",
    icon: TrendingUp,
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers speed without shortcuts
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center relative"
              >
                <div className="glass-card p-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
