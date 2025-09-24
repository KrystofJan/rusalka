import type { Metadata } from 'next';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { AuthForm } from '@/components/auth-form';
import { GoApiTest } from '@/components/go-api-test';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to KrystofJan - Software Engineer and Technology Enthusiast. Explore my projects, blog posts, and professional services.',
};

export default async function Home() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch('http://localhost:8080/api/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();

  return (
    <div className="space-y-brand-8 min-h-screen p-brand-8 shadow-terminal-xl">
      <div className="text-center mb-brand-12 p-brand-8 rounded-brand-xl shadow-terminal-lg">
        <p className="text-brand-xl text-brand-subtext1">Rusalka</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4">UserID: {data.ID}</h2>
        </div>
      </div>
    </div>
  );
}
