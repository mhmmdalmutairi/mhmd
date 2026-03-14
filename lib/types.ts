export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
  year: string;
  status: "completed" | "in-progress" | "concept";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  highlights: string[];
  logo?: string;
  current?: boolean;
  type: "fulltime" | "parttime" | "freelance" | "advisory";
}

export interface Skill {
  name: string;
  level: number;
  category: "technical" | "product" | "leadership" | "design";
  icon?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
  platform: "linkedin" | "medium" | "personal" | "twitter";
  featured?: boolean;
}

export interface Podcast {
  id: string;
  title: string;
  show: string;
  date: string;
  duration?: string;
  description: string;
  link?: string;
  image?: string;
  platform: string;
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  role: string;
  period: string;
  impact?: string;
  link?: string;
  tags: string[];
  image?: string;
}

export interface SocialPost {
  id: string;
  platform: "twitter" | "linkedin" | "instagram" | "youtube";
  content: string;
  date: string;
  likes?: number;
  link?: string;
}
