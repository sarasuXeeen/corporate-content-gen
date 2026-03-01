import { motion } from "framer-motion";
import { Layers, Users, Briefcase, Target } from "lucide-react";

const phases = [
  "Planning & Mobilisation",
  "Programme Delivery",
  "Stabilisation & Optimisation",
  "Transition & Closure",
];

const engagementForms = [
  {
    icon: Layers,
    title: "Embedded Support",
    desc: "Experienced professionals integrated directly into client teams, operating within existing governance and reporting structures.",
  },
  {
    icon: Users,
    title: "Capacity Extension",
    desc: "Rapid deployment of specialist capacity to supplement internal teams during periods of high demand or critical delivery phases.",
  },
  {
    icon: Briefcase,
    title: "Advisory Engagement",
    desc: "Strategic and operational advisory to help leadership teams structure, de-risk, and navigate complex programme environments.",
  },
  {
    icon: Target,
    title: "Specialist Roles",
    desc: "Targeted placement of domain experts — from programme managers to sector-specific technical leads — for defined scopes of work.",
  },
];

const CapabilitiesSection = () => (
  <section id="capabilities" className="bg-background py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">What We Do</p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">
          Programme Support &{" "}
          <span className="text-teal">Delivery Capability</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          TRI provides structured support across the full programme lifecycle. Whether building capacity, filling specialist gaps, or providing strategic advisory, our engagements are scoped, governed, and accountable.
        </p>
      </motion.div>

      {/* Programme phases */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 rounded-xl border border-border bg-muted p-8"
      >
        <h3 className="mb-5 font-heading text-lg font-bold text-primary">Phases of Work Supported</h3>
        <div className="flex flex-wrap gap-3">
          {phases.map((phase, i) => (
            <span
              key={phase}
              className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-4 py-2 text-sm font-medium text-teal"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {phase}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Engagement forms */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {engagementForms.map((form, i) => (
          <motion.div
            key={form.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
              <form.icon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-primary">{form.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{form.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesSection;
