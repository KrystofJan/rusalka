'use client';
import { authClient } from '@/lib/auth-client';
import { Button, Input } from '@rusalka/ui';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(false);
    setError('');

    const result = await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: '/login',
      },
      {
        onRequest: (ctx) => {
          //show loading
          setLoading(true);
        },
        onError: (ctx) => {
          // display the error message
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
      {error}
      {loading}

      <Button type="submit" size="lg" variant="primary">
        Sign up
      </Button>
    </form>
  );
}
