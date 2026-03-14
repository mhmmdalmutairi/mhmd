"use client";

import { motion } from "framer-motion";
import { Building2, Users, Rocket, Globe, ExternalLink, TrendingUp } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

const pillars = [
  {
    icon:  Rocket,
    title: "الابتكار",
    desc:  "نؤمن أن الابتكار المستمر هو الطريق الوحيد للبقاء في عالم رقمي متسارع.",
  },
  {
    icon:  Users,
    title: "الفريق",
    desc:  "فريق متنوع من أفضل المواهب يجمعهم هدف واحد: بناء ما يستحق.",
  },
  {
    icon:  Globe,
    title: "الأثر",
    desc:  "كل ما نبنيه يخدم حاجة حقيقية ويُحدث أثراً ملموساً في حياة المستخدمين.",
  },
  {
    icon:  TrendingUp,
    title: "النمو",
    desc:  "نبني للمستقبل مع الحفاظ على الاستدامة والنمو الصحي طويل الأمد.",
  },
];

const companyStats = [
  { value: personalInfo.company.founded, label: "تأسست عام" },
  { value: "٢٠+",                        label: "عضو في الفريق" },
  { value: "١م+",                         label: "مستخدم نشط" },
  { value: "٥",                           label: "منتج مطلق" },
];

export default function Company() {
  return (
    <section id="company" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black text-brand-text/[0.015] select-none leading-none">
          COMPANY
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <SectionLabel>الشركة</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mt-4">
                <span className="text-brand-text">{personalInfo.company.name}</span>
                <br />
                <span className="text-gradient">{personalInfo.company.tagline}</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-brand-subtle text-base leading-relaxed mt-6 mb-8">
                {personalInfo.company.description}
              </p>
            </ScrollReveal>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <ScrollReveal key={p.title} delay={0.1 + i * 0.1}>
                  <div className="glass rounded-2xl p-5 border border-brand-border hover:border-brand-gold/20 transition-all card-hover group">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-3 group-hover:bg-brand-gold/15 transition-colors">
                      <p.icon size={18} className="text-brand-gold" />
                    </div>
                    <h3 className="text-brand-text font-semibold text-sm mb-1">{p.title}</h3>
                    <p className="text-brand-subtle text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.4}>
              <div className="mt-8">
                <a
                  href={personalInfo.company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-gold-sm"
                >
                  <ExternalLink size={16} />
                  زيارة الموقع
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats + Visual */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative">
              {/* Company card */}
              <div className="glass-gold rounded-3xl p-8 border border-brand-gold/20 shadow-gold-md">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-gold to-amber-500 flex items-center justify-center shadow-gold-sm">
                    <Building2 size={28} className="text-brand-dark" />
                  </div>
                  <div>
                    <h3 className="text-brand-text font-black text-xl">{personalInfo.company.name}</h3>
                    <p className="text-brand-gold text-sm">{personalInfo.company.taglineEn}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="bg-brand-darker/60 rounded-2xl p-4 text-center border border-brand-border/50"
                    >
                      <div className="text-2xl font-black text-gradient mb-1">{stat.value}</div>
                      <div className="text-brand-subtle text-xs">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-brand-gold/15" />

                {/* Team indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold/40 to-brand-card border-2 border-brand-darker flex items-center justify-center text-xs font-bold text-brand-gold"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-brand-card border-2 border-brand-darker flex items-center justify-center text-xs font-bold text-brand-subtle">
                      +١٥
                    </div>
                  </div>
                  <span className="text-brand-subtle text-sm">فريق متميز</span>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 glass-gold px-4 py-2 rounded-2xl"
              >
                <span className="text-brand-gold text-sm font-bold">🚀 نمو مستمر</span>
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 glass-gold px-4 py-2 rounded-2xl"
              >
                <span className="text-brand-gold text-sm font-bold">✅ منتجات موثوقة</span>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
