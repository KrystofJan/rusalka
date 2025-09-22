import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to KrystofJan - Software Engineer, Full-Stack Developer, and Technology Enthusiast. Explore my projects, blog posts, and professional services.',
};

export default function Home() {
  return (
    <div className="space-y-brand-8 min-h-screen p-brand-8 shadow-terminal-xl">
      <div className="text-center mb-brand-12 p-brand-8 rounded-brand-xl shadow-terminal-lg">
        <p className="text-brand-xl text-brand-subtext1">Rusalka</p>
      </div>
    </div>
  );
}
