import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-deep text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-bold text-gold font-display mb-4">404 — Page Not Found</h2>
      <p className="text-slate-300 max-w-md mb-6">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-gold text-navy px-6 py-3 font-bold uppercase tracking-wider text-sm hover:brightness-95 transition-all"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
