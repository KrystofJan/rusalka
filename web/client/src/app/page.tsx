import type { Metadata } from 'next';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { Authenticated } from '@/lib/auth-checks';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to KrystofJan - Software Engineer and Technology Enthusiast. Explore my projects, blog posts, and professional services.',
};

export default async function Home() {
  let values;
  // TODO: Handle error
  const { token, error: _error } = await Authenticated('server');

  if (!token) {
    values = (
      <div>
        <h2>User not signed in</h2>
      </div>
    );
  } else {
    console.log(token);
    const res = await fetch('http://localhost:8080/api/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();

    const response = await fetch(
      `http://localhost:8080/api/accounts/${data.id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data2 = await response.json();
    values = (
      <div>
        <h2 className="text-xl font-bold mb-4">UserID: {data.id}</h2>
        <h2 className="text-xl font-bold mb-4">Email: {data.email}</h2>
        <h2 className="text-xl font-bold mb-4">Name: {data.name}</h2>
        <h2 className="text-xl font-bold mb-4">
          FirstName: {data2.first_name}
        </h2>
        <h2 className="text-xl font-bold mb-4">LastName: {data2.last_name}</h2>
        <h2 className="text-xl font-bold mb-4">role: {data2.role}</h2>
        <h2 className="text-xl font-bold mb-4">
          PhoneNUmber: {data2.phone_number}
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-brand-8 min-h-screen p-brand-8 shadow-terminal-xl">
      <div className="text-center mb-brand-12 p-brand-8 rounded-brand-xl shadow-terminal-lg">
        <p className="text-brand-xl text-brand-subtext1">Rusalka</p>
      </div>

      <div className="space-y-8">{values}</div>
    </div>
  );
}
