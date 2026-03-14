"use client";

import { motion } from "framer-motion";
import { Mic, PlayCircle, Clock, ExternalLink, Headphones } from "lucide-react";
import { podcasts } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

const platformColors: Record<string, string> = {
  Spotify:    "text-green-400 bg-green-500/10 border-green-500/20",
  YouTube:    "text-red-400 bg-red-500/10 border-red-500/20",
  SoundCloud: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  Apple:      "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

export default function Podcasts() {
  return (
    <section id="podcasts" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>بودكاستات وحوارات</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">أحاديثي</span>{" "}
              <span className="text-gradient">المُذاعة</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              حلقات استضافتني فيها بودكاستات عربية بارزة لمناقشة التقنية والمنتج والريادة
            </p>
          </div>
        </ScrollReveal>

        {/* Featured first podcast */}
        {podcasts[0] && (
          <ScrollReveal delay={0.1}>
            <a
              href={podcasts[0].link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass rounded-2xl p-8 border border-brand-gold/15 hover:border-brand-gold/30 transition-all card-hover mb-8 group"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Mic icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-gold/20 to-brand-gold/5 border border-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Mic size={32} className="text-brand-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-brand-gold text-brand-dark font-bold">
                      <Headphones size={11} />
                      حلقة مميزة
                    </span>
                    {podcasts[0].platform && (
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs border ${platformColors[podcasts[0].platform] || "text-brand-subtle bg-brand-card border-brand-border"}`}>
                        {podcasts[0].platform}
                      </span>
                    )}
                  </div>
                  <h3 className="text-brand-text font-bold text-xl mb-1 group-hover:text-brand-gold transition-colors">
                    {podcasts[0].title}
                  </h3>
                  <p className="text-brand-gold text-sm mb-3">{podcasts[0].show}</p>
                  <p className="text-brand-subtle text-sm leading-relaxed mb-4">{podcasts[0].description}</p>
                  <div className="flex items-center gap-4 text-brand-subtle text-sm">
                    <span>{podcasts[0].date}</span>
                    {podcasts[0].duration && (
                      <span className="flex items-center gap-1">
                        <Clock size={13} />
                        {podcasts[0].duration}
                      </span>
                    )}
                  </div>
                </div>
                <PlayCircle size={32} className="text-brand-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
              </div>
            </a>
          </ScrollReveal>
        )}

        {/* Remaining podcasts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.slice(1).map((podcast, i) => (
            <ScrollReveal key={podcast.id} delay={i * 0.1}>
              <a
                href={podcast.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col glass rounded-2xl p-6 border border-brand-border hover:border-brand-gold/20 transition-all card-hover h-full group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors">
                    <Mic size={20} className="text-brand-gold" />
                  </div>
                  <PlayCircle size={20} className="text-brand-subtle group-hover:text-brand-gold transition-colors" />
                </div>

                <h3 className="text-brand-text font-bold text-base leading-snug mb-2 group-hover:text-brand-gold transition-colors flex-1">
                  {podcast.title}
                </h3>
                <p className="text-brand-gold text-sm mb-2">{podcast.show}</p>
                <p className="text-brand-subtle text-sm leading-relaxed mb-4 line-clamp-2">{podcast.description}</p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-brand-border">
                  <div className="flex items-center gap-3 text-brand-subtle text-xs">
                    <span>{podcast.date}</span>
                    {podcast.duration && (
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {podcast.duration}
                      </span>
                    )}
                  </div>
                  {podcast.platform && (
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs border ${platformColors[podcast.platform] || "text-brand-subtle bg-brand-card border-brand-border"}`}>
                      {podcast.platform}
                    </span>
                  )}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-brand-subtle mb-4 text-sm">مهتم باستضافتي في بودكاست؟</p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-gold-sm"
            >
              <Mic size={16} />
              تواصل للاستضافة
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
