"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
];

const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "Flexible"];

const referralSources = [
  "Google Search",
  "LinkedIn",
  "Referral",
  "Twitter/X",
  "Other",
];

const benefits = [
  "Free 30-minute discovery call",
  "Project scope & timeline estimate",
  "Custom proposal within 48 hours",
  "No commitment required",
];

export function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    projectBrief: "",
    budgetRange: "",
    timeline: "",
    referralSource: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Book a <span className="gradient-text">Discovery Call</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Tell us about your project and we&apos;ll get back to you within 24
            hours to schedule a conversation.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {benefit}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-8"
          >
            {/* Name and Email */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Work Email <span className="text-secondary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            {/* Company and Role */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground"
                >
                  Company <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Acme Inc"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="role"
                  className="text-sm font-medium text-foreground"
                >
                  Role <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="CEO, CTO, Product Manager"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>
            </div>

            {/* Project Brief */}
            <div className="space-y-2">
              <label
                htmlFor="projectBrief"
                className="text-sm font-medium text-foreground"
              >
                Project Brief <span className="text-secondary">*</span>
              </label>
              <textarea
                id="projectBrief"
                name="projectBrief"
                rows={5}
                placeholder="Tell us about your project, your goals, and any specific challenges you're facing..."
                value={formData.projectBrief}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                required
              />
            </div>

            {/* Budget and Timeline */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="budgetRange"
                  className="text-sm font-medium text-foreground"
                >
                  Budget Range <span className="text-secondary">*</span>
                </label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>
                    Select budget range
                  </option>
                  {budgetRanges.map((range) => (
                    <option
                      key={range}
                      value={range}
                      className="bg-card text-foreground"
                    >
                      {range}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="timeline"
                  className="text-sm font-medium text-foreground"
                >
                  Desired Start <span className="text-secondary">*</span>
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>
                    Select timeline
                  </option>
                  {timelines.map((time) => (
                    <option
                      key={time}
                      value={time}
                      className="bg-card text-foreground"
                    >
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Referral Source */}
            <div className="space-y-2">
              <label
                htmlFor="referralSource"
                className="text-sm font-medium text-foreground"
              >
                How did you hear about us?
              </label>
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select one
                </option>
                {referralSources.map((source) => (
                  <option
                    key={source}
                    value={source}
                    className="bg-card text-foreground"
                  >
                    {source}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                variant="gradient"
                size="xl"
                className="w-full"
              >
                Submit Inquiry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                We&apos;ll review your brief and send a calendar invite within
                24 hours.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
