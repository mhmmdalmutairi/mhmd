"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { User, Heart, Target, Lightbulb, Twitter, Linkedin, Github } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

const values = [
  {
    icon:  Target,
    title: "هدف حقيقي",
    desc:  "كل مشروع أعمل عليه يجب أن يحل مشكلة حقيقية ويخدم احتياجاً فعلياً.",
  },
  {
    icon:  Lightbulb,
    title: "الابتكار دائماً",
    desc:  "لا أقبل بالوضع الراهن إذا كان هناك طريقة أفضل لإنجاز الأمور.",
  },
  {
    icon:  Heart,
    title: "أثر اجتماعي",
    desc:  "أؤمن أن التقنية يجب أن تخدم المجتمع وتُحدث أثراً إيجابياً حقيقياً.",
  },
  {
    icon:  User,
    title: "الإنسان أولاً",
    desc:  "المستخدم هو محور كل قرار أتخذه، وتجربته هي المقياس الحقيقي للنجاح.",
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section-padding bg-brand-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Avatar + decorative */}
          <ScrollReveal direction="right">
            <div className="relative flex items-center justify-center">
              {/* Decorative rings */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-brand-gold/15 animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-brand-gold/10" />

              {/* Avatar container */}
              <div className="relative w-72 h-72">
                <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/20 overflow-hidden flex items-center justify-center shadow-gold-md">
                  {/* Placeholder avatar - replace with real image */}
                  <div className="w-full h-full bg-gradient-to-br from-brand-card to-brand-darker flex items-center justify-center">
                    <span className="text-8xl font-black text-gradient select-none">م</span>
                  </div>
                </div>

                {/* Floating badge 1 */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass-gold px-4 py-2 rounded-2xl"
                >
                  <span className="text-brand-gold text-sm font-bold">٨+ سنوات</span>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 glass-gold px-4 py-2 rounded-2xl"
                >
                  <span className="text-brand-gold text-sm font-bold">١م+ مستخدم</span>
                </motion.div>
              </div>

              {/* Social links */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                {[
                  { icon: Twitter,  href: personalInfo.social.twitter  },
                  { icon: Linkedin, href: personalInfo.social.linkedin },
                  { icon: Github,   href: personalInfo.social.github   },
                ].map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: -4 }}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-brand-subtle hover:text-brand-gold border border-brand-border hover:border-brand-gold/30 transition-colors"
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Content */}
          <div ref={ref} className="space-y-8">
            <ScrollReveal delay={0.1}>
              <SectionLabel>من أنا</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="text-brand-text">بانٍ بالتقنية،</span>
                <br />
                <span className="text-gradient">مُلهَم بالأثر</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-brand-subtle text-base leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-brand-subtle text-base leading-relaxed mt-4">
                خلال مسيرتي، عملت على تقاطع التقنية وريادة الأعمال، ابتداءً من تطوير المنتجات الرقمية وصولاً إلى قيادة فرق متعددة الجنسيات نحو بناء حلول تخدم ملايين المستخدمين في المنطقة.
              </p>
            </ScrollReveal>

            {/* Values grid */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass rounded-2xl p-4 group hover:border-brand-gold/20 transition-all card-hover"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-3 group-hover:bg-brand-gold/15 transition-colors">
                      <v.icon size={18} className="text-brand-gold" />
                    </div>
                    <h3 className="text-brand-text font-semibold text-sm mb-1">{v.title}</h3>
                    <p className="text-brand-subtle text-xs leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-gold-sm"
                >
                  راسلني مباشرة
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold glass border border-brand-border hover:border-brand-gold/30 text-brand-text transition-all"
                >
                  تحميل السيرة الذاتية
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
