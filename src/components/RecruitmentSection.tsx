import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, HeartPulse, HardHat, Hotel } from "lucide-react";

const principles = [
  "Transparency in roles, terms, and communication",
  "Fair treatment and no exploitation",
  "No unlawful recruitment fees",
  "Informed consent before placement",
  "Compliance with labour, immigration, and sector regulations",
];

const sectors = [
  { icon: HardHat, label: "Construction & Civil Engineering" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Hotel, label: "Hospitality" },
];

const RecruitmentSection = () => (
  <section id="recruitment" className="bg-muted py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">Recruitment Services</p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">
          Ethical Recruitment,{" "}
          <span className="text-teal">Global Standards</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          TRI provides ethical, professional recruitment services aligned with internationally recognised best practices, including the IRIS ethical recruitment initiative and the WHO Global Code of Practice for healthcare recruitment.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="mb-6 font-heading text-xl font-bold text-primary">Core Principles</h3>
          <ul className="space-y-4">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-foreground">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-lg border border-teal/20 bg-teal/5 p-5">
            <div className="flex items-start gap-3">
              <FileCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <div>
                <h4 className="font-heading font-bold text-primary">Healthcare Responsible Sourcing</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Responsible sourcing practices, respect for workforce sustainability, proper documentation and compliance checks, and clear employment pathways — specifically for regulated healthcare recruitment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sectors */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="mb-6 font-heading text-xl font-bold text-primary">Sectors We Serve</h3>
          <div className="grid gap-4">
            {sectors.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-heading text-lg font-semibold text-primary">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default RecruitmentSection;
