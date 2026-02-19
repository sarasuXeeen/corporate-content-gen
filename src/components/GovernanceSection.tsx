import { motion } from "framer-motion";
import { BarChart3, Clock, AlertTriangle, Repeat } from "lucide-react";

const items = [
  { icon: BarChart3, title: "Defined KPIs", desc: "Clear, measurable performance indicators aligned to client objectives and service-level agreements." },
  { icon: Clock, title: "Reporting Cycles", desc: "Structured reporting at agreed intervals — weekly, monthly, and quarterly reviews." },
  { icon: AlertTriangle, title: "Escalation Pathways", desc: "Transparent escalation procedures ensuring issues are resolved swiftly and effectively." },
  { icon: Repeat, title: "Ongoing Optimisation", desc: "Continuous improvement through data-driven analysis and proactive service enhancements." },
];

const GovernanceSection = () => (
  <section id="governance" className="bg-muted py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">Governance</p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">
          Accountability &{" "}
          <span className="text-teal">Governance</span>
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex gap-5 rounded-xl border border-border bg-card p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
              <item.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-primary">{item.title}</h3>
              <p className="mt-1 text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GovernanceSection;
