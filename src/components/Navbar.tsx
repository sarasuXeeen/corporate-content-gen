import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#recruitment" },
  { label: "Sectors", href: "#sectors" },
  { label: "When to Engage", href: "#when-to-engage" },
  { label: "Why TRI", href: "#why-tri" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-2xl font-bold tracking-tight text-primary">
          TRI<span className="text-teal">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-teal text-accent-foreground hover:bg-teal-light"
            onClick={() => handleClick("#contact")}
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-heading text-xl font-bold text-primary">
              TRI<span className="text-teal">.</span>
            </SheetTitle>
            <div className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-base font-medium text-foreground transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-4 bg-teal text-accent-foreground hover:bg-teal-light"
                onClick={() => handleClick("#contact")}
              >
                Get in Touch
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
