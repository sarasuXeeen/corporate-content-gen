import { motion } from "framer-motion";
import { AlertCircle, Puzzle, RefreshCw, TrendingUp, Clock, Shield } from "lucide-react";

const triggers = [
  {
    icon: AlertCircle,
    title: "Delivery Risk Is Increasing",
    desc: "Programmes showing signs of slippage, scope creep, or governance gaps require experienced intervention before critical milestones are missed.",
  },
  {
    icon: Puzzle,
    title: "Specialist Capability Gaps Appear",
    desc: "When internal teams lack the domain expertise required for specific programme phases, TRI provides targeted specialist capacity without long-term overhead.",
  },
  {
    icon: RefreshCw,
    title: "Programmes Require Stabilisation",
    desc: "Initiatives that have stalled or require re-baselining benefit from structured, independent support to restore momentum and confidence.",
  },
  {
    icon: TrendingUp,
    title: "Transformation Complexity Exceeds Internal Capacity",
    desc: "Large-scale change programmes — digital transformation, infrastructure delivery, regulatory compliance — often demand capability that is difficult to sustain internally.",
  },
  {
    icon: Clock,
    title: "Speed of Mobilisation Is Critical",
    desc: "When programmes need to be stood up quickly, TRI provides ready-to-deploy professionals without lengthy procurement or onboarding cycles.",
  },
  {
    icon: Shield,
    title: "Accountability and Governance Must Be Strengthened",
    desc: "Where reporting, KPIs, and escalation structures are insufficient, TRI's governance frameworks provide the rigour leadership teams require.",
  },
];

const WhenToEngageSection = () => (
  <section id="when-to-engage" className="bg-primary py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">When to Engage</p>
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          When Should Organisations{" "}
          <span className="text-teal">Engage TRI?</span>
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70">
          TRI is most effective when organisations face delivery complexity that exceeds current internal capacity or expertise. The following scenarios represent common points of engagement.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {triggers.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-teal/20 text-teal">
              <t.icon className="h-5 w-5" />
            </div>
            <h3 className="font-heading text-base font-bold text-primary-foreground">{t.title}</h3>
            <p className="mt-2 text-sm text-primary-foreground/60">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhenToEngageSection;
