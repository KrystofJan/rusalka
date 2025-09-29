import { authClient } from './auth-client';
import { auth } from './auth';
import { headers } from 'next/headers';

type ResponseType =
  | { token: null; error: Error }
  | { token: string; error: null };

export async function Authenticated(
  caller: 'client' | 'server'
): Promise<ResponseType> {
  try {
    if (caller === 'client') {
      const { data: session, error } = await authClient.getSession();
      if (!session) {
        return { token: null, error: new Error('No session present') };
      }
      return { token: session?.session.token, error: null };
    } else {
      const { token } = await auth.api.getToken({
        headers: await headers(),
      });
      if (!token) {
        return { token: null, error: new Error('Could not find the token') };
      }
      return { token, error: null };
    }
  } catch (err) {
    return { token: null, error: err as Error };
  }
}
