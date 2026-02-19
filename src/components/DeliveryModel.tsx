import { motion } from "framer-motion";
import { Landmark, Globe2, UserCheck, TrendingUp } from "lucide-react";

const steps = [
  { icon: Landmark, title: "UK-Led Engagement", desc: "Client-facing strategy and relationship management led from the UK." },
  { icon: Globe2, title: "International Operations", desc: "Regionally embedded teams in India and the UAE execute with precision." },
  { icon: UserCheck, title: "Single Accountability", desc: "One point of contact ensures consistency, clarity, and rapid escalation." },
  { icon: TrendingUp, title: "Scalable Delivery", desc: "Flexible model that scales with your needs — from project to enterprise." },
];

const DeliveryModel = () => (
  <section id="delivery" className="bg-primary py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">How We Deliver</p>
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          Our Delivery Model
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="relative rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center"
          >
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-teal px-3 py-1 font-heading text-xs font-bold text-accent-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-primary-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/60">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliveryModel;
