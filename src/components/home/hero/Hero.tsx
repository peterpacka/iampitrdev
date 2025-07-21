import { Title } from "./Title";

export default function Hero() {
  return (
    <section className="flex min-h-[45rem] items-center justify-center">
      <div className="space-y-1 text-center">
        <Title />
        <p className="text-2xl">16-Year-Old Frontend Developer from Slovakia</p>
      </div>
    </section>
  );
}
