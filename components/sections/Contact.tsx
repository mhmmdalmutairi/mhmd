"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Twitter, Linkedin, Github, Loader2, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { toast } from "sonner";

const contactMethods = [
  {
    icon:  Mail,
    label: "البريد الإلكتروني",
    value: personalInfo.email,
    href:  `mailto:${personalInfo.email}`,
  },
  {
    icon:  Twitter,
    label: "تويتر",
    value: "@mhmd",
    href:  personalInfo.social.twitter,
  },
  {
    icon:  Linkedin,
    label: "لينكدإن",
    value: "in/mhmd",
    href:  personalInfo.social.linkedin,
  },
  {
    icon:  MapPin,
    label: "الموقع",
    value: personalInfo.location,
    href:  "#",
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise(r => setTimeout(r, 1800));
    setLoading(false);
    setSent(true);
    toast.success("تم إرسال رسالتك بنجاح! سأتواصل معك قريباً 🎉");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-brand-darker relative overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel>تواصل</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              <span className="text-brand-text">لنبدأ</span>{" "}
              <span className="text-gradient">محادثة</span>
            </h2>
            <p className="text-brand-subtle mt-4 max-w-xl mx-auto">
              سواء كانت فرصة تعاون أو سؤال أو مجرد تحية، أنا هنا للتواصل
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="right">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 glass rounded-2xl p-5 border border-brand-border hover:border-brand-gold/20 transition-all card-hover group block"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/15 transition-colors flex-shrink-0">
                    <method.icon size={18} className="text-brand-gold" />
                  </div>
                  <div>
                    <div className="text-brand-subtle text-xs mb-0.5">{method.label}</div>
                    <div className="text-brand-text font-medium text-sm">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </ScrollReveal>

            {/* Availability badge */}
            <ScrollReveal delay={0.4}>
              <div className="glass-gold rounded-2xl p-5 border border-brand-gold/15 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 font-medium text-sm">متاح حالياً</span>
                </div>
                <p className="text-brand-subtle text-sm">
                  مفتوح لفرص التعاون، الاستشارات، والاستضافة في البودكاستات
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal className="lg:col-span-3" delay={0.1} direction="left">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-brand-border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-brand-subtle text-sm mb-2">الاسم *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="اسمك الكريم"
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-gold/40 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-brand-subtle text-sm mb-2">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="email@example.com"
                    className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-gold/40 transition-colors"
                    dir="ltr"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-brand-subtle text-sm mb-2">الموضوع</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  placeholder="موضوع رسالتك"
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-gold/40 transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-brand-subtle text-sm mb-2">الرسالة *</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full bg-brand-card border border-brand-border rounded-xl px-4 py-3 text-brand-text placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-gold/40 transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: loading || sent ? 1 : 1.02 }}
                whileTap={{ scale: loading || sent ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-bold bg-brand-gold text-brand-dark hover:bg-brand-gold/90 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-gold-sm"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    جارٍ الإرسال...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle2 size={18} />
                    تم الإرسال بنجاح!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    إرسال الرسالة
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
