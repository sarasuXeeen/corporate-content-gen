import { motion } from "framer-motion";
import { Globe, Users, Building } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Global Presence",
    desc: "Offices in the United Kingdom, India, and the UAE — serving clients worldwide.",
  },
  {
    icon: Users,
    title: "Experienced Leadership",
    desc: "Backgrounds in recruitment, outsourcing, and international business operations with active shareholder oversight.",
  },
  {
    icon: Building,
    title: "Managed Delivery",
    desc: "UK-led oversight combined with regionally embedded operational capability for consistent, accountable results.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="bg-background py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">About TRI</p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">
          Why TRI{" "}
          <span className="text-teal">Exists</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Tier Resources International was established to address a consistent gap in the market: organisations undertaking complex, high-stakes initiatives that require experienced delivery capability but lack the capacity or specialist expertise to execute effectively at scale.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          TRI is a UK-headquartered company with operational presence in India and the UAE. Our leadership team brings backgrounds in programme delivery, recruitment, outsourcing, and international business operations. Strategic oversight is provided by active shareholders from complementary industries, ensuring commercial discipline and long-term accountability.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-xl font-bold text-primary">{p.title}</h3>
            <p className="mt-2 text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
