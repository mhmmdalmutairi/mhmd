"use client";

import { motion } from "framer-motion";
import { Heart, Users, ExternalLink, TrendingUp, Zap } from "lucide-react";
import { initiatives } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Initiatives() {
  return (
    <section id="initiatives" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>المبادرات والمشاركات المجتمعية</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">أثري في</span>{" "}
              <span className="text-gradient">المجتمع</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              مبادرات ومشاريع مجتمعية تعكس قيمي وشغفي بإحداث فرق حقيقي
            </p>
          </div>
        </ScrollReveal>

        {/* Stats banner */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: Users,     value: "١٠٠+",  label: "رائد أعمال دعمتهم" },
              { icon: Heart,     value: "٤+",    label: "مبادرات أسسّتها" },
              { icon: TrendingUp, value: "٣٠٠٠+", label: "عضو في مجتمعاتي" },
              { icon: Zap,       value: "٢٠+",   label: "حل تقني أطلقته" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 text-center border border-brand-border hover:border-brand-gold/20 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-gold/15 transition-colors">
                  <stat.icon size={18} className="text-brand-gold" />
                </div>
                <div className="text-2xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-brand-subtle text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Initiatives grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((init, i) => (
            <ScrollReveal key={init.id} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 border border-brand-border hover:border-brand-gold/20 transition-all card-hover h-full flex flex-col group">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors flex-shrink-0">
                    <Heart size={20} className="text-brand-gold" />
                  </div>
                  {init.link && (
                    <a
                      href={init.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-brand-subtle hover:text-brand-gold hover:bg-brand-gold/8 border border-transparent hover:border-brand-gold/20 transition-all"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                <h3 className="text-brand-text font-bold text-lg mb-2 leading-snug group-hover:text-brand-gold transition-colors">
                  {init.title}
                </h3>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-brand-gold text-sm font-medium">{init.role}</span>
                  <span className="text-brand-subtle text-xs">·</span>
                  <span className="text-brand-subtle text-xs">{init.period}</span>
                </div>

                <p className="text-brand-subtle text-sm leading-relaxed mb-4 flex-1">
                  {init.description}
                </p>

                {init.impact && (
                  <div className="glass-gold rounded-xl p-3 mb-4">
                    <div className="flex items-center gap-2 text-brand-gold text-sm font-medium">
                      <TrendingUp size={14} />
                      <span>{init.impact}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-border">
                  {init.tags.map(tag => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
