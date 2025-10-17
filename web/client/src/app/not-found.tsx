export default function NotFound() {
  return (
    <div className="min-h-screen p-8 ">
      <div className="bg-brand-gray2 p-8 rounded-brand-xl border border-brand-gray4 shadow-terminal-lg text-center">
        <h1 className="text-6xl font-bold text-brand-red mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-brand-fg mb-4">
          Page Not Found
        </h2>
        <p className="text-brand-subtext1 mb-6">
          The page you're looking for doesn't exist in this session.
        </p>
        <a
          href="/"
          className="inline-flex items-center bg-brand-cyan hover:bg-brand-cyan-dark text-white px-6 py-3 rounded-brand-lg transition-all duration-300 shadow-terminal hover:shadow-glow-sm"
        >
          ← Return Home
        </a>
      </div>
    </div>
  );
}
