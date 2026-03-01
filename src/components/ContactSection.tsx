import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const offices = [
  { location: "United Kingdom", address: "London, UK" },
  { location: "India", address: "Delhi, India" },
  { location: "UAE", address: "Dubai, UAE" },
];

const ContactSection = () => (
  <section id="contact" className="bg-primary py-24">
    <div className="container max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-teal">Get in Touch</p>
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-5xl">
          Discuss Your Initiative
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
          Reach out to discuss your programme, capacity requirements, or delivery challenges. Our team will respond directly and without obligation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Button size="lg" className="bg-teal text-accent-foreground hover:bg-teal-light" asChild>
          <a href="mailto:info@tri-global.com">
            <Mail className="mr-2 h-4 w-4" /> Email Us
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          asChild
        >
          <a href="tel:+440000000000">
            <Phone className="mr-2 h-4 w-4" /> Call Us
          </a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          asChild
        >
          <a href="https://wa.me/440000000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 flex flex-wrap justify-center gap-8"
      >
        {offices.map((o) => (
          <div key={o.location} className="flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="h-4 w-4 text-teal" />
            <span className="text-sm font-medium">{o.location}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
