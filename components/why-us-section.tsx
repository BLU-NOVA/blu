"use client"

import { motion } from "framer-motion"
import { Zap, UserCheck, Award, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Product Development",
    description: "Launch your MVP in weeks with battle-tested patterns",
    icon: Zap,
  },
  {
    title: "Talent Placement",
    description: "Hire vetted engineers to fill gaps in your team",
    icon: UserCheck,
  },
  {
    title: "Senior Expertise",
    description: "Work with experienced professionals who have shipped before",
    icon: Award,
  },
  {
    title: "Flexible Engagement",
    description: "Choose project-based or staff augmentation",
    icon: Settings,
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-medium mb-3">Why Founders Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Your Complete Technology Partner</h2>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-8"
            >
              <Button variant="hero">Learn more about our approach</Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Developer working on product"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute bottom-6 left-6 glass-card p-4"
              >
                <p className="text-3xl font-bold gradient-text">8 weeks</p>
                <p className="text-muted-foreground text-sm">Average MVP delivery</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
