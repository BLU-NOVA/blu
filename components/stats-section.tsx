"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "8", suffix: " weeks", label: "Average MVP Delivery" },
  { value: "10", suffix: "+", label: "Products Launched" },
  { value: "100", suffix: "%", label: "Client Satisfaction" },
]

export function StatsSection() {
  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-xl text-muted-foreground font-medium">Proven Track Record</h3>
          <p className="text-foreground">Trusted by founders across fintech, marketplaces, edtech, and more</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                <span className="gradient-text">{stat.value}</span>
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
