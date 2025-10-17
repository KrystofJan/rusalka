'use client';
import { redirect, RedirectType } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import { Button, Input } from '@rusalka/ui';
import { useState } from 'react';
import { getClientAuth } from '@/lib/auth-checks';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: '/login',
      },
      {
        onSuccess: async (ctx) => {
          // TODO: Make a request to the backend `/api/signup` and add a user
          // TODO: Use generated client from open api when openapi spec is done
          try {
            // Get the session to extract the token
            const session = await authClient.getSession();
            const token = session?.data?.session?.token;

            if (!token) {
              setError('No authentication token found');
              return;
            }

            const res = await fetch('http://localhost:8082/api/signup', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                first_name: firstName,
                last_name: lastName, // Fixed typo: was lastName
                role: 'user',
              }),
            });

            if (!res.ok) {
              const errorText = await res.text();
              console.error('Backend signup error:', errorText);
              setError('There was an error creating a user profile');
              return;
            }

            // redirect on success
            redirect('/login', RedirectType.replace);
          } catch (error) {
            console.error('Signup error:', error);
            setError('There was an error during signup');
          }
        },
        onRequest: (ctx) => {
          //show loading
          setLoading(true);
        },
        onError: (ctx) => {
          // display the error message
          setLoading(false);
          setError(ctx.error.message);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Input
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        placeholder="first name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <Input
        placeholder="last name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      {error}
      {loading}

      <Button type="submit" size="lg" variant="primary">
        Sign up
      </Button>
    </form>
  );
}
