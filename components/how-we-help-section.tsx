"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "Build Your Product",
    description: "Turn your idea into reality with our full-stack team",
    icon: Lightbulb,
  },
  {
    number: "2",
    title: "Hire Top Talent",
    description: "Find qualified engineers to join your team",
    icon: Users,
  },
  {
    number: "3",
    title: "Launch to Customers",
    description: "Ship fast and start validating with real users",
    icon: Rocket,
  },
  {
    number: "4",
    title: "Scale & Grow",
    description: "Expand your product and team as you grow",
    icon: TrendingUp,
  },
]

export function HowWeHelpSection() {
  return (
    <section className="py-24 relative" id="how">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Help You Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From product development to team building, we support your growth
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 group hover:border-primary/50 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="mb-4">
                <step.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
