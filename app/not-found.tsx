import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 text-center bg-bg-primary">
      <span className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
        404 — PAGE NOT FOUND
      </span>
      <h1 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-text-primary mb-4">
        OUT OF BOUNDS
      </h1>
      <p className="font-mono text-sm text-text-secondary max-w-md mb-8">
        The requested resource does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>RETURN TO HOME</span>
      </Link>
    </div>
  );
}
