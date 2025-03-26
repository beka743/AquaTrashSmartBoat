import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Droplet } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#technology", label: "Technology" },
    { href: "#impact", label: "Impact" },
    { href: "#gallery", label: "Gallery" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // If we're not on the home page, navigate there first
    if (location !== "/") {
      window.history.pushState({}, "", "/");
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-2">
              <Droplet className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading font-semibold text-xl text-primary">
              AquaTrash SmartBoat
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="font-heading font-medium hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={
            isMobileMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          className={`overflow-hidden lg:hidden`}
        >
          <div className="px-2 pt-2 pb-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="block w-full text-left py-2 font-heading font-medium hover:text-secondary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
