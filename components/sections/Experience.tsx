"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
import { experiences } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>المسيرة المهنية</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-gradient">رحلتي المهنية</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              مسيرة مبنية على التعلم المستمر والأثر الحقيقي في كل محطة
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-8 md:right-1/2 md:translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-2 gap-0",
        "pr-20 md:pr-0"
      )}
    >
      {/* Timeline dot */}
      <div className="absolute right-6 md:right-1/2 md:translate-x-1/2 top-6 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center",
            exp.current
              ? "bg-brand-gold border-brand-gold shadow-gold-sm"
              : "bg-brand-card border-brand-border"
          )}
        >
          {exp.current && (
            <motion.div
              className="w-2 h-2 rounded-full bg-brand-dark"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Content card */}
      <div
        className={cn(
          "glass rounded-2xl p-6 border border-brand-border hover:border-brand-gold/20 transition-all card-hover",
          "md:col-start-1 md:mr-8",
          isEven ? "md:col-start-1 md:ml-0 md:mr-8" : "md:col-start-2 md:mr-8 md:ml-0"
        )}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
            <Briefcase size={20} className="text-brand-gold" />
          </div>
          <div className="text-left">
            {exp.current && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                حالياً
              </span>
            )}
          </div>
        </div>

        <h3 className="text-brand-text font-bold text-lg mb-1">{exp.role}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-brand-gold font-medium text-sm">{exp.company}</span>
          {exp.companyUrl && (
            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={13} className="text-brand-subtle hover:text-brand-gold transition-colors" />
            </a>
          )}
        </div>
        <span className="text-brand-subtle text-xs mb-4 block">{exp.period}</span>

        <p className="text-brand-subtle text-sm leading-relaxed mb-4">{exp.description}</p>

        <ul className="space-y-2">
          {exp.highlights.map((h, j) => (
            <li key={j} className="flex items-start gap-2 text-brand-subtle text-sm">
              <CheckCircle2 size={14} className="text-brand-gold mt-0.5 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-4 border-t border-brand-border">
          <span className={cn(
            "inline-flex items-center px-3 py-1 rounded-full text-xs",
            exp.type === "fulltime"  ? "tag" :
            exp.type === "advisory"  ? "bg-purple-500/10 text-purple-400 border border-purple-500/20" :
            "bg-blue-500/10 text-blue-400 border border-blue-500/20"
          )}>
            {exp.type === "fulltime"  ? "دوام كامل" :
             exp.type === "parttime"  ? "دوام جزئي" :
             exp.type === "advisory"  ? "استشاري" : "فريلانس"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
