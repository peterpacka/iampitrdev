import Footer from "@/components/footer/Footer";
import About from "@/components/home/about/About";
import Contact from "@/components/home/contact/Contact";
import Hero from "@/components/home/hero/Hero";
import Projects from "@/components/home/projects/Projects";
import Skills from "@/components/home/skills/Skills";
import Navigation from "@/components/navigation/Navigation";
import { NavigationProvider } from "@/components/navigation/NavigationContext";

export default function Home() {
  return (
    <>
      <NavigationProvider>
        <Navigation />
        <main className="mx-auto max-w-[110rem] space-y-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </NavigationProvider>
    </>
  );
}
