"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const howWeWorkItems = [
  "Weekly demos of working software",
  "Shared dashboards for real-time progress tracking",
  "CI/CD pipelines and observability from day one",
  "Clear SLAs and escalation paths",
  "Comprehensive documentation and knowledge transfer",
];

const operatingModels = [
  {
    title: "Fixed-Scope MVPs",
    description:
      "Perfect for launching new products. We scope the work together, agree on deliverables, and deliver on time and budget. Typical duration: 6-12 weeks.",
  },
  {
    title: "Staff Augmentation",
    description:
      "Need to fill critical gaps? We embed senior engineers, designers, or PMs into your existing team. They work directly with your processes and tools.",
  },
  {
    title: "Hybrid Pod",
    description:
      "For long-term partnerships, we provide a dedicated cross-functional squad that acts as an extension of your company. Full ownership of a product stream or vertical.",
  },
];

export function MissionSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Blunova exists to help ambitious teams build technology
              products that matter. We partner with startups, SMEs, and
              enterprises to design, build, and scale digital products using
              modern engineering practices and a product-first mindset.
            </p>
          </motion.div>

          {/* How We Work */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We operate as small, senior squads with high ownership and
              transparent delivery. Every project includes:
            </p>
            <ul className="space-y-4">
              {howWeWorkItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Operating Models */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Operating Models
            </h2>
            <div className="space-y-8">
              {operatingModels.map((model, index) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="glass-card p-6"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {model.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {model.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
