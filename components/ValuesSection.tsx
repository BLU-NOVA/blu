"use client";

import { motion } from "framer-motion";
import { Gem, Eye, Heart, Lightbulb, MessageCircle } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: "Craft",
    description:
      "We take pride in writing clean, maintainable code and creating intuitive experiences.",
  },
  {
    icon: Eye,
    title: "Clarity",
    description:
      "Clear communication, transparent processes, and honest feedback at every step.",
  },
  {
    icon: Heart,
    title: "Care",
    description:
      "We treat your product like our own. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "Always learning, always improving. We stay ahead of technology trends.",
  },
  {
    icon: MessageCircle,
    title: "Candor",
    description:
      "Direct, respectful feedback. We tell you what you need to hear, not what you want to hear.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Values
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The principles that guide how we work and the decisions we make
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-6 text-center hover:border-primary/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
