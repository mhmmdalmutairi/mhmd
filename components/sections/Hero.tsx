"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowDown, Sparkles, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const ROLES = [
  "رائد أعمال 🚀",
  "قائد منتجات 📦",
  "مبتكر تقني 💡",
  "مُلهم أفكار ✨",
];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay]     = useState("");
  const [wordIdx, setWordIdx]     = useState(0);
  const [charIdx, setCharIdx]     = useState(0);
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

// Particle component
function Particle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-brand-gold/20"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y:       [-10, 10, -10],
        opacity: [0.2, 0.6, 0.2],
        scale:   [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat:   Infinity,
        delay,
        ease:     "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id:    i,
  x:     Math.random() * 100,
  y:     Math.random() * 100,
  size:  Math.random() * 4 + 2,
  delay: Math.random() * 4,
}));

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ["start start", "end start"],
  });

  const y       = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const currentRole = useTypewriter(ROLES);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-brand-darker"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 dots-bg opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Rotating ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-brand-gold/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-brand-gold/8"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full text-sm text-brand-gold mb-8"
        >
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-xs">متاح للتعاون</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            <span className="text-brand-text block">أنا</span>
            <span className="text-gradient block">{personalInfo.name}</span>
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-12 flex items-center justify-center mb-8"
        >
          <span className="text-xl sm:text-2xl md:text-3xl text-brand-subtle font-medium">
            {currentRole}
            <span className="text-brand-gold animate-pulse">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-brand-subtle text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12"
        >
          {personalInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="glass rounded-2xl p-4 text-center group hover:border-brand-gold/20 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-brand-subtle text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-bold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 transition-all shadow-gold-sm"
          >
            <Sparkles size={18} />
            استكشف مشاريعي
          </motion.a>

          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold glass border border-brand-border hover:border-brand-gold/30 text-brand-text transition-all"
          >
            اعرف أكثر عني
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-subtle hover:text-brand-gold transition-colors group"
        aria-label="تمرير للأسفل"
      >
        <span className="text-xs tracking-widest uppercase font-medium">تمرير</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="group-hover:text-brand-gold" />
        </motion.div>
      </motion.button>
    </section>
  );
}
