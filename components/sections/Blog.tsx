"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Clock, Linkedin, Globe, Twitter } from "lucide-react";
import { blogPosts } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const platformConfig = {
  linkedin: { label: "LinkedIn", icon: Linkedin, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  medium:   { label: "Medium",   icon: Globe,    color: "text-green-400 bg-green-500/10 border-green-500/20" },
  personal: { label: "المدونة",  icon: Globe,    color: "text-brand-gold bg-brand-gold/10 border-brand-gold/20" },
  twitter:  { label: "Twitter",  icon: Twitter,  color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
};

export default function Blog() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? blogPosts : blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>المدونة والمحتوى</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">أفكاري</span>{" "}
              <span className="text-gradient">مكتوبة</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              مقالات وتحليلات في التقنية والمنتج وريادة الأعمال
            </p>
          </div>
        </ScrollReveal>

        {/* Featured post */}
        {blogPosts.filter(p => p.featured)[0] && (
          <ScrollReveal delay={0.1}>
            <FeaturedPost post={blogPosts.filter(p => p.featured)[0]} />
          </ScrollReveal>
        )}

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {displayed.filter(p => !p.featured || blogPosts.indexOf(p) > 0).map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.1}>
              <BlogCard post={post} />
            </ScrollReveal>
          ))}
        </div>

        {/* Show more */}
        {blogPosts.length > 3 && (
          <ScrollReveal delay={0.2}>
            <div className="text-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold glass border border-brand-border hover:border-brand-gold/30 text-brand-text transition-all"
              >
                {showAll ? "عرض أقل" : "عرض الكل"}
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
  const platform = platformConfig[post.platform];
  const PlatformIcon = platform.icon;

  return (
    <a
      href={post.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block glass rounded-2xl p-8 border border-brand-gold/15 hover:border-brand-gold/30 transition-all card-hover mb-6 group"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-brand-gold text-brand-dark font-bold">
              مقال مميز
            </span>
            <span className={cn("inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border", platform.color)}>
              <PlatformIcon size={11} />
              {platform.label}
            </span>
          </div>
          <h3 className="text-brand-text font-bold text-xl md:text-2xl leading-snug mb-3 group-hover:text-brand-gold transition-colors">
            {post.title}
          </h3>
          <p className="text-brand-subtle leading-relaxed mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-brand-subtle text-sm">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {post.readTime}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-brand-gold">
          <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const platform = platformConfig[post.platform];
  const PlatformIcon = platform.icon;

  return (
    <a
      href={post.link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col glass rounded-2xl p-6 border border-brand-border hover:border-brand-gold/20 transition-all card-hover h-full group"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={cn("inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs border", platform.color)}>
          <PlatformIcon size={11} />
          {platform.label}
        </span>
        <ExternalLink size={14} className="text-brand-subtle group-hover:text-brand-gold transition-colors" />
      </div>

      <h3 className="text-brand-text font-bold text-base leading-snug mb-3 group-hover:text-brand-gold transition-colors flex-1">
        {post.title}
      </h3>
      <p className="text-brand-subtle text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="tag text-xs">{tag}</span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-brand-subtle text-xs pt-3 border-t border-brand-border">
        <span>{post.date}</span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <Clock size={11} />
          {post.readTime}
        </span>
      </div>
    </a>
  );
}
