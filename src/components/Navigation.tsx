import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ResumeOverlay from "@/components/ResumeOverlay"; // 👈 Import

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResume, setShowResume] = useState(false); // 👈 New state

  const navItems = [
    { label: "Resume", href: "#", isResume: true }, // 👈 changed
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, isResume?: boolean) => {
    if (isResume) {
      setShowResume(true); // 👈 show overlay
      setIsOpen(false);
      return;
    }

    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              IS
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isResume)}
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.isResume)}
                  className="block w-full text-left text-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Get in Touch
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* 👇 Resume Overlay */}
      {showResume && <ResumeOverlay onClose={() => setShowResume(false)} />}
    </>
  );
};

export default Navigation;
