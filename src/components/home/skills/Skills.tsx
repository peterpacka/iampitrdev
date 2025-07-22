import { SkillsGrid } from "./SkillsGrid";
import { AnimatedTitle } from "./AnimatedTitle";
import { SkillsInViewObserver } from "./SkillsInViewObserver";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative flex min-h-[50rem] flex-col items-center justify-center gap-8 px-4"
    >
      <AnimatedTitle />
      <SkillsInViewObserver />
      <div className="space-y-8 md:px-16">
        <p className="text-xl md:text-2xl lg:text-3xl">
          My main tools include{" "}
          <span className="text-highlight">JavaScript (JS)</span>,{" "}
          <span className="text-highlight">TypeScript (TS)</span>,{" "}
          <span className="text-highlight">React</span>,{" "}
          <span className="text-highlight">Next.js</span>, and{" "}
          <span className="text-highlight">Tailwind CSS</span>. I also have
          experience with <span className="text-highlight">Svelte</span>,{" "}
          <span className="text-highlight">MongoDB</span>, and{" "}
          <span className="text-highlight">Lua</span>. I&#39;m passionate about
          learning new frameworks and tools, always seeking ways to{" "}
          <span className="text-highlight">write clean code</span>, improve{" "}
          <span className="text-highlight">user experience</span>, and build{" "}
          <span className="text-highlight">efficient</span> and{" "}
          <span className="text-highlight">modern web applications</span>.
          I&#39;m not an expert yet. I&#39;m still perfecting my skills every
          day!
        </p>
        <SkillsGrid />
      </div>
    </section>
  );
}
