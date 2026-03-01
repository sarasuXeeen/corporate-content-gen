const quickLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#recruitment" },
  { label: "Sectors", href: "#sectors" },
  { label: "When to Engage", href: "#when-to-engage" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
      <div>
        <a href="#" className="font-heading text-xl font-bold text-primary">
          TRI<span className="text-teal">.</span>
        </a>
        <p className="mt-1 text-sm text-muted-foreground">
          Tier Resources International © {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-4">
        {quickLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  </footer>
);

export default Footer;
