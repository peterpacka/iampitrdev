import { HeroInViewObserver } from "./HeroInViewObserver";
import { AnimatedTitle } from "./AnimatedTitle";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100lvh] flex-col items-center justify-center gap-10 px-4"
    >
      <HeroInViewObserver />
      <AnimatedTitle />
    </section>
  );
}
