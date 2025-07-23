import { socialLinks } from "@/data/socials";
import { AnimatedTitle } from "./AnimatedTitle";
import { ContactInViewObserver } from "./ContactInViewObserver";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Time } from "./Time";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[40rem] items-center justify-center gap-y-12 p-6 max-lg:flex-col"
    >
      <ContactInViewObserver />
      <div className="flex-1/2">
        <div className="space-y-8">
          <div className="text-center">
            <AnimatedTitle />
          </div>
          <p className="text-center text-xl md:text-2xl lg:text-3xl">
            Interested in{" "}
            <span className="text-highlight">working together</span> or just{" "}
            <span className="text-highlight">want to say hi</span>? Feel free to
            reach out!
          </p>
          <ul className="flex flex-col gap-4">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <Link
                  draggable={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navigation-border ring-accent flex w-full items-center justify-center gap-4 rounded-xl p-2 text-xl font-bold outline-0 transition-all duration-150 select-none hover:-translate-y-0.5 focus-visible:-translate-y-0.5 focus-visible:ring-2 md:text-2xl lg:text-3xl"
                  href={social.link}
                >
                  <img
                    draggable={false}
                    className={cn(
                      "h-14",
                      social.name === "github" && "dark:invert",
                      social.name === "pitr@iampitr.dev" && "not-dark:invert",
                    )}
                    src={social.img}
                    alt={social.name}
                  />
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-1/2 flex-col items-center justify-center gap-y-3">
        <p className="text-muted text-xl md:text-3xl">
          my local time <span className="text-lg">(utc+2)</span>
        </p>
        <h3 className="text-5xl font-black md:text-8xl">
          <Time />
        </h3>
      </div>
    </section>
  );
}
