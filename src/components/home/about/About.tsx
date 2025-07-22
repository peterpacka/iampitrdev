import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function About() {
  return (
    <AnimatedSection>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold max-md:text-center md:ml-20 md:text-4xl lg:text-5xl">
          <span className="text-muted lg:text-2xl">{"/*"}</span> about me{" "}
          <span className="text-muted text-2xl">{"*/"}</span>
        </h2>
        <p className="ml-5 max-w-[90%] text-xl md:ml-10 md:text-2xl lg:text-3xl">
          Hi! I’m <span className="text-highlight">Peter Packa</span>, a{" "}
          <span className="text-highlight">
            self-taught 16-year-old frontend developer
          </span>{" "}
          from Slovakia. I love building{" "}
          <span className="text-highlight">modern</span>,{" "}
          <span className="text-highlight">responsive websites</span> and{" "}
          <span className="text-highlight">web applications</span> using
          technologies like <span className="text-highlight">React</span>,{" "}
          <span className="text-highlight">Next.js</span>, and{" "}
          <span className="text-highlight">Tailwind CSS</span>. My learning
          comes from <span className="text-highlight">YouTube tutorials</span>,{" "}
          <span className="text-highlight">documentation</span>, and hands-on
          projects. I believe in writing{" "}
          <span className="text-highlight">clean</span>,{" "}
          <span className="text-highlight">maintainable code</span> and always
          stay curious to <span className="text-highlight">keep improving</span>{" "}
          my skills. Let’s{" "}
          <span className="text-highlight">build something awesome</span>{" "}
          together!
        </p>
      </div>
      <div className="shrink-0">
        <Image
          draggable={false}
          className="rounded-full max-md:size-42"
          width={250}
          height={250}
          alt="my profile picture on github"
          src="/static/kitten.png"
        />
      </div>
    </AnimatedSection>
  );
}
