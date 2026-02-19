import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FileSpreadsheet, Headphones, Layers } from "lucide-react";

const categories = [
  {
    id: "people",
    label: "People & HR",
    icon: Users,
    items: ["Payroll processing", "HR administration", "Compliance documentation", "Onboarding and offboarding"],
  },
  {
    id: "backoffice",
    label: "Back-Office",
    icon: FileSpreadsheet,
    items: ["Data management", "Reporting support", "Finance & accounting process support", "Invoice reconciliation"],
  },
  {
    id: "customer",
    label: "Customer Ops",
    icon: Headphones,
    items: ["Helpdesk", "Scheduling", "Service desk escalation", "Multi-channel support"],
  },
  {
    id: "sector",
    label: "Sector-Specific",
    icon: Layers,
    items: [
      "Healthcare administration",
      "Hospitality operations",
      "Construction project admin",
      "Supply chain coordination",
    ],
  },
];

const BPOSection = () => (
  <section id="bpo" className="bg-background py-24">
    <div className="container max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">
          Business Process Outsourcing
        </p>
        <h2 className="font-heading text-3xl font-bold text-primary md:text-5xl">
          Tailored Outsourcing{" "}
          <span className="text-teal">Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          TRI delivers tailored outsourcing solutions under clearly defined Statements of Work, ensuring measurable outcomes and operational transparency.
        </p>
      </motion.div>

      <Tabs defaultValue="people" className="w-full">
        <TabsList className="mb-8 flex h-auto flex-wrap gap-2 bg-transparent p-0">
          {categories.map((c) => (
            <TabsTrigger
              key={c.id}
              value={c.id}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors data-[state=active]:border-teal data-[state=active]:bg-teal/10 data-[state=active]:text-teal"
            >
              <c.icon className="h-4 w-4" />
              {c.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((c) => (
          <TabsContent key={c.id} value={c.id}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary">{c.label} Operations</h3>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {c.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default BPOSection;
