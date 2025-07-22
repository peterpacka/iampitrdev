import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-black md:text-7xl lg:text-8xl">404</h1>
      <p className="text-muted mt-1 text-center text-xl md:text-2xl lg:text-4xl">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <p className="mt-10 text-center text-xl">
        Double-check the URL or head back to the{" "}
        <Link href="/" className="text-highlight underline">
          homepage
        </Link>
        .
      </p>
    </main>
  );
}
