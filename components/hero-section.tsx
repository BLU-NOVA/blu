// Updated HeroSection with scroll indicator pinned to bottom of viewport
"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
            >
              <span className="text-primary">⚡</span>
              <span className="text-sm text-muted-foreground">From Idea to Launch</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Build & Launch
              <br />
              Your Product <span className="gradient-text">Faster</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground font-medium">Partner with a senior full-stack team</p>

            {/* Description */}
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              We help founders build products and scale teams. Full-stack development, design, product expertise, and
              talent placement — all in one partnership.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="lg">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaborating on product development"
                className="w-full h-auto rounded-2xl"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute bottom-6 left-6 right-6 glass-card p-4 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  10+
                </div>
                <div>
                  <p className="text-foreground font-semibold">Products Launched</p>
                  <p className="text-muted-foreground text-sm">Across multiple industries</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator pinned to bottom */}
      <button
        type="button"
        onClick={() => {
          const next = document.getElementById('how');
          if (!next) console.warn('next-section not found');
          if (next) next.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-20 focus:outline-none"
      >
        <span className="text-sm">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
    </section>
  )
}
