import { motion } from "framer-motion";
import { HardHat, HeartPulse, Hotel } from "lucide-react";

const sectors = [
  {
    icon: HardHat,
    title: "Construction & Civil Engineering",
    desc: "Skilled tradespeople, engineers, and project support staff for infrastructure and development projects worldwide.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Responsible recruitment of medical professionals with compliance to WHO Global Code of Practice and regulatory standards.",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    desc: "Front-of-house, operations, and management personnel for hotels, restaurants, and leisure enterprises.",
  },
];

const SectorsSection = () => (
  <section id="sectors" className="bg-background py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">Industries</p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">Sectors We Serve</h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {sectors.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-xl"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal/5 transition-transform group-hover:scale-150" />
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
