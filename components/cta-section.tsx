"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Turn Your Idea Into Reality?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss your product vision and create a plan to launch quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl">
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
