"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Youtube, TrendingUp, Users, Heart, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";

const platforms = [
  {
    name:     "تويتر / X",
    icon:     Twitter,
    handle:   "@mhmd",
    link:     personalInfo.social.twitter,
    stats:    [
      { label: "متابع",  value: "١٠ك+" },
      { label: "تغريدة", value: "٢٥٠٠+" },
    ],
    desc:     "أشارك أفكاري ومشاهداتي في التقنية والمنتج وريادة الأعمال.",
    color:    "from-sky-500/20 to-blue-500/5",
    border:   "border-sky-500/20",
    iconBg:   "bg-sky-500/10 text-sky-400",
  },
  {
    name:     "لينكدإن",
    icon:     Linkedin,
    handle:   "mhmd",
    link:     personalInfo.social.linkedin,
    stats:    [
      { label: "متابع",  value: "٥ك+" },
      { label: "مقال",   value: "١٠٠+" },
    ],
    desc:     "مقالات مهنية معمقة عن إدارة المنتج والقيادة التقنية.",
    color:    "from-blue-600/20 to-blue-500/5",
    border:   "border-blue-600/20",
    iconBg:   "bg-blue-600/10 text-blue-400",
  },
  {
    name:     "إنستغرام",
    icon:     Instagram,
    handle:   "@mhmd",
    link:     personalInfo.social.instagram,
    stats:    [
      { label: "متابع",  value: "٨ك+" },
      { label: "منشور",  value: "٣٠٠+" },
    ],
    desc:     "لحظات من حياتي المهنية والشخصية وخلف الكواليس.",
    color:    "from-pink-500/20 to-purple-500/5",
    border:   "border-pink-500/20",
    iconBg:   "bg-pink-500/10 text-pink-400",
  },
  {
    name:     "يوتيوب",
    icon:     Youtube,
    handle:   "@mhmd",
    link:     personalInfo.social.youtube,
    stats:    [
      { label: "مشترك",  value: "٣ك+" },
      { label: "فيديو",  value: "٥٠+" },
    ],
    desc:     "محتوى فيديو تعليمي وتحليلي في مجال التقنية والمنتج.",
    color:    "from-red-500/20 to-orange-500/5",
    border:   "border-red-500/20",
    iconBg:   "bg-red-500/10 text-red-400",
  },
];

// Sample posts for Twitter
const sampleTweets = [
  {
    content: "أهم درس تعلمته في بناء المنتجات: المستخدم لا يعرف ما يريد، لكنه يعرف تماماً ما يكره. ابدأ من هناك.",
    likes:   "٢٤٨",
    replies: "٣٢",
    date:    "قبل ٣ أيام",
  },
  {
    content: "الفرق بين الشركة الناشئة التي تنجح وتلك التي تفشل غالباً ليس في الفكرة. إنه في الفريق والتنفيذ والتوقيت.",
    likes:   "١٨٥",
    replies: "٢٤",
    date:    "قبل أسبوع",
  },
  {
    content: "نصيحة لكل مدير منتج مبتدئ: اقضِ ٨٠٪ من وقتك مع المستخدمين وقيادتك، و٢٠٪ فقط مع التصاميم والوثائق.",
    likes:   "٣١٢",
    replies: "٤٧",
    date:    "قبل أسبوعين",
  },
];

export default function Social() {
  return (
    <section id="social" className="section-padding bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>التواجد الرقمي</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">تابعني</span>{" "}
              <span className="text-gradient">عبر الشبكات</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              أشارك يومياً محتوى في التقنية والمنتج وريادة الأعمال عبر منصات التواصل
            </p>
          </div>
        </ScrollReveal>

        {/* Platforms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1}>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block glass rounded-2xl p-6 border ${p.border} hover:scale-105 transition-all duration-300 card-hover bg-gradient-to-br ${p.color} group`}
              >
                <div className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <p.icon size={22} />
                </div>
                <h3 className="text-brand-text font-bold text-base mb-1">{p.name}</h3>
                <p className="text-brand-subtle text-sm mb-4">{p.handle}</p>
                <p className="text-brand-subtle text-xs leading-relaxed mb-5">{p.desc}</p>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  {p.stats.map(stat => (
                    <div key={stat.label} className="text-center">
                      <div className="text-brand-text font-bold text-sm">{stat.value}</div>
                      <div className="text-brand-subtle text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Sample tweets */}
        <ScrollReveal delay={0.2}>
          <div className="mb-6">
            <h3 className="text-brand-text font-bold text-xl mb-6 flex items-center gap-3">
              <Twitter size={22} className="text-sky-400" />
              آخر التغريدات
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {sampleTweets.map((tweet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-6 border border-brand-border hover:border-sky-500/20 transition-all card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center">
                      <span className="text-sm font-black text-gradient">م</span>
                    </div>
                    <div>
                      <div className="text-brand-text font-semibold text-sm">محمد المطيري</div>
                      <div className="text-brand-subtle text-xs">@mhmd</div>
                    </div>
                    <Twitter size={16} className="text-sky-400 mr-auto" />
                  </div>

                  <p className="text-brand-text text-sm leading-relaxed mb-4">{tweet.content}</p>

                  <div className="flex items-center gap-4 text-brand-subtle text-xs pt-3 border-t border-brand-border">
                    <span className="flex items-center gap-1">
                      <Heart size={12} />
                      {tweet.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={12} />
                      {tweet.replies}
                    </span>
                    <span className="mr-auto">{tweet.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
