"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Category = "all" | "product" | "technical" | "leadership" | "design";

const categories: { id: Category; label: string }[] = [
  { id: "all",        label: "الكل" },
  { id: "product",    label: "المنتج" },
  { id: "leadership", label: "القيادة" },
  { id: "technical",  label: "التقني" },
  { id: "design",     label: "التصميم" },
];

const categoryColors: Record<string, string> = {
  product:    "from-amber-500 to-yellow-400",
  technical:  "from-blue-500 to-cyan-400",
  leadership: "from-purple-500 to-pink-400",
  design:     "from-green-500 to-teal-400",
};

function SkillBar({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="glass rounded-2xl p-5 border border-brand-border hover:border-brand-gold/20 transition-all group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-brand-text font-medium text-sm">{skill.name}</span>
        <span className="text-brand-gold font-bold text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-brand-card rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full bg-gradient-to-r", categoryColors[skill.category])}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.06 + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all"
    ? skills
    : skills.filter(s => s.category === active);

  return (
    <section id="skills" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>الكفاءات والمهارات</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">ما أُتقنه</span>{" "}
              <span className="text-gradient">ويُميّزني</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              مزيج فريد من المهارات التقنية والقيادية والإبداعية
            </p>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  active === cat.id
                    ? "bg-brand-gold text-brand-dark font-bold shadow-gold-sm"
                    : "glass border border-brand-border text-brand-subtle hover:text-brand-text hover:border-brand-gold/20"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-brand-subtle text-sm mt-12">
            الأرقام تعبّر عن مستوى الثقة وعمق التجربة في كل مجال، وليست مجرد تقدير ذاتي.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
