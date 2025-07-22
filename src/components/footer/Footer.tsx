import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-accent/3 text-muted flex min-h-[3rem] w-full flex-col items-center justify-center gap-y-2 py-2 md:flex-row md:gap-x-8">
      <Link
        draggable={false}
        className="hover:underline"
        href="https://github.com/peterpacka/iampitrdev"
        target="_blank"
        rel="noopener noreferrer"
      >
        this website is open source
      </Link>
      <p>Peter Packa &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
