import Header      from "@/components/layout/Header";
import Footer      from "@/components/layout/Footer";
import Hero        from "@/components/sections/Hero";
import About       from "@/components/sections/About";
import Experience  from "@/components/sections/Experience";
import Projects    from "@/components/sections/Projects";
import Skills      from "@/components/sections/Skills";
import Blog        from "@/components/sections/Blog";
import Company     from "@/components/sections/Company";
import Podcasts    from "@/components/sections/Podcasts";
import Initiatives from "@/components/sections/Initiatives";
import Social      from "@/components/sections/Social";
import Contact     from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Company />
      <Initiatives />
      <Podcasts />
      <Blog />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}
