"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, Clock, CheckCircle } from "lucide-react";
import { projects } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Filter = "all" | "featured" | "completed" | "in-progress";

const filters: { id: Filter; label: string }[] = [
  { id: "all",         label: "الكل" },
  { id: "featured",    label: "المميزة" },
  { id: "completed",   label: "منجزة" },
  { id: "in-progress", label: "جارية" },
];

const statusConfig = {
  completed:   { label: "منجز",   icon: CheckCircle, color: "text-green-400 bg-green-500/10 border-green-500/20" },
  "in-progress": { label: "جارٍ", icon: Clock,        color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  concept:     { label: "فكرة",   icon: Sparkles,    color: "text-purple-400 bg-purple-500/10 border-purple-500/20" },
};

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = projects.filter(p => {
    if (active === "all")         return true;
    if (active === "featured")    return p.featured;
    if (active === "completed")   return p.status === "completed";
    if (active === "in-progress") return p.status === "in-progress";
    return true;
  });

  return (
    <section id="projects" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>المشاريع والأعمال</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">ما بنيته</span>{" "}
              <span className="text-gradient">بأيدٍ وأفكار</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              مشاريع حقيقية ألقت بأثر حقيقي في السوق والمجتمع
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filters.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  active === f.id
                    ? "bg-brand-gold text-brand-dark font-bold shadow-gold-sm"
                    : "glass border border-brand-border text-brand-subtle hover:text-brand-text hover:border-brand-gold/20"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <ProjectCard project={project} featured={project.featured} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-brand-subtle">
            لا توجد مشاريع في هذه الفئة
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: typeof projects[0]; featured?: boolean }) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <div className={cn(
      "relative glass rounded-2xl p-6 border transition-all duration-300 card-hover h-full flex flex-col",
      featured
        ? "border-brand-gold/20 hover:border-brand-gold/40"
        : "border-brand-border hover:border-brand-gold/20"
    )}>
      {featured && (
        <div className="absolute -top-3 right-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-brand-gold text-brand-dark font-bold shadow-gold-sm">
            <Sparkles size={11} />
            مميز
          </span>
        </div>
      )}

      {/* Project thumbnail placeholder */}
      <div className="w-full h-36 rounded-xl bg-gradient-to-br from-brand-card to-brand-darker border border-brand-border mb-5 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform">
        <span className="text-4xl font-black text-gradient opacity-40">
          {project.title.charAt(0)}
        </span>
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-brand-text font-bold text-lg leading-tight">{project.title}</h3>
          <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border flex-shrink-0", status.color)}>
            <StatusIcon size={11} />
            {status.label}
          </span>
        </div>

        <p className="text-brand-subtle text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="tag text-xs">{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-brand-border">
        <span className="text-brand-subtle text-xs">{project.year}</span>
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-brand-subtle hover:text-brand-text hover:bg-brand-card border border-transparent hover:border-brand-border transition-all"
            >
              <Github size={16} />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-brand-gold/10 text-brand-gold hover:bg-brand-gold/20 border border-brand-gold/20 transition-all"
            >
              <ExternalLink size={13} />
              مشاهدة
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
