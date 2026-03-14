"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "عني",        href: "#about" },
  { label: "تجربتي",    href: "#experience" },
  { label: "مشاريعي",   href: "#projects" },
  { label: "مهاراتي",   href: "#skills" },
  { label: "مبادراتي",  href: "#initiatives" },
  { label: "بودكاستات", href: "#podcasts" },
  { label: "مدوناتي",   href: "#blog" },
  { label: "تواصل",     href: "#contact" },
];

export default function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Update active section
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 glass border-b border-brand-border/50"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-xl font-black text-gradient tracking-wider">mhmd.sa</span>
            <span className="absolute -bottom-0.5 right-0 w-0 group-hover:w-full h-0.5 bg-brand-gold transition-all duration-300" />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    isActive
                      ? "text-brand-gold"
                      : "text-brand-subtle hover:text-brand-text"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-brand-gold/8 rounded-lg border border-brand-gold/20"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all duration-200 hover:shadow-gold-sm"
            >
              تواصل معي
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-brand-subtle hover:text-brand-text hover:bg-brand-card transition-colors"
              aria-label="القائمة"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-brand-darker/80 backdrop-blur-md"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute top-20 inset-x-4 glass rounded-2xl p-6 border border-brand-border">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-right px-4 py-3 rounded-xl text-brand-text hover:text-brand-gold hover:bg-brand-gold/8 transition-all duration-200 font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="mt-4 pt-4 border-t border-brand-border">
                  <a
                    href="#contact"
                    onClick={() => handleNavClick("#contact")}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-xl text-sm font-semibold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all"
                  >
                    تواصل معي
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
