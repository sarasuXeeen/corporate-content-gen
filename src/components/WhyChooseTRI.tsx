import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "UK-headquartered with genuine international delivery capability across three regions",
  "Ethical recruitment aligned with IRIS and WHO Global Code of Practice",
  "Single point of accountability — one relationship, consistent oversight",
  "Flexible, scalable engagement model from project-level to enterprise-wide",
  "Defined KPIs, structured reporting cycles, and transparent governance",
  "Deep sector expertise across Construction, Healthcare, and Hospitality",
  "Integrated recruitment and BPO delivered under one trusted partner",
  "Active shareholder oversight ensuring commercial discipline and long-term vision",
  "Ready-to-deploy capability reducing mobilisation lead times significantly",
  "Experienced in regulated, complex, and cross-border delivery environments",
];

const WhyChooseTRI = () => (
  <section id="why-tri" className="bg-muted py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">Our Edge</p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">
          Why Choose <span className="text-teal">TRI</span>
        </h2>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="flex items-start gap-3 rounded-lg border border-border bg-card p-5"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
            <span className="font-medium text-foreground">{r}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseTRI;
