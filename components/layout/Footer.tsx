"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: Twitter,   href: personalInfo.social.twitter,   label: "تويتر" },
  { icon: Linkedin,  href: personalInfo.social.linkedin,  label: "لينكدإن" },
  { icon: Github,    href: personalInfo.social.github,    label: "جيتهاب" },
  { icon: Instagram, href: personalInfo.social.instagram, label: "إنستغرام" },
  { icon: Youtube,   href: personalInfo.social.youtube,   label: "يوتيوب" },
];

const quickLinks = [
  { label: "عني",        href: "#about" },
  { label: "مشاريعي",   href: "#projects" },
  { label: "تجربتي",    href: "#experience" },
  { label: "مدوناتي",   href: "#blog" },
  { label: "تواصل",     href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-brand-border bg-brand-darker overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-gold/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-gradient mb-4">mhmd.sa</div>
            <p className="text-brand-subtle text-sm leading-relaxed max-w-xs">
              {personalInfo.bio}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-subtle hover:text-brand-gold hover:border-brand-gold/30 hover:bg-brand-gold/8 transition-all duration-200 group"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-brand-text font-semibold mb-5 text-sm tracking-wide">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      const id = href.replace("#", "");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-brand-subtle hover:text-brand-gold text-sm transition-colors hover-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-text font-semibold mb-5 text-sm tracking-wide">تواصل</h3>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-brand-subtle hover:text-brand-gold text-sm transition-colors hover-underline block mb-2"
            >
              {personalInfo.email}
            </a>
            <p className="text-brand-subtle text-sm">{personalInfo.location}</p>

            <div className="mt-6">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold border border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10 transition-all duration-200"
              >
                ابدأ محادثة
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-brand-border/60">
          <p className="text-brand-subtle text-xs">
            © {new Date().getFullYear()} محمد المطيري · جميع الحقوق محفوظة
          </p>
          <p className="text-brand-subtle text-xs">
            صُنع بـ ❤️ في الرياض
          </p>
          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-subtle hover:text-brand-gold hover:border-brand-gold/30 transition-all duration-200"
            aria-label="العودة للأعلى"
          >
            <ArrowUp size={17} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
