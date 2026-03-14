import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children:  React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3 mb-6", className)}>
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-brand-gold opacity-60" />
      <span className="section-label text-xs">{children}</span>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-brand-gold opacity-60" />
    </div>
  );
}
