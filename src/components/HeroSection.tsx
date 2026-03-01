import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-primary py-28 md:py-44">
    {/* Geometric accents */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-teal/10" />
      <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-teal/5" />
      <div className="absolute right-1/4 top-1/3 h-64 w-64 rotate-45 border border-teal/20" />
      <div className="absolute left-1/3 bottom-1/4 h-32 w-32 rotate-12 border border-teal/10" />
    </div>

    <div className="container relative z-10 max-w-5xl text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal"
      >
        UK &bull; India &bull; UAE
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
      >
        Helping Organisations Plan, Deliver, and Sustain{" "}
        <span className="text-teal">Complex Initiatives.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/70"
      >
        Tier Resources International provides programme support, specialist capacity, and delivery expertise for organisations navigating complex work — from mobilisation through to stabilisation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Button
          size="lg"
          className="bg-teal text-accent-foreground hover:bg-teal-light"
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Discuss Your Initiative <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => document.querySelector("#capabilities")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore Our Capabilities
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-16 flex flex-wrap justify-center gap-10 border-t border-primary-foreground/10 pt-10"
      >
        {[
          { label: "Ethical Recruitment", sub: "IRIS & WHO aligned" },
          { label: "BPO & Outsourcing", sub: "Defined Statements of Work" },
          { label: "UK-Led Governance", sub: "Single accountability" },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-teal">{item.label}</p>
            <p className="mt-0.5 text-xs text-primary-foreground/50">{item.sub}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
