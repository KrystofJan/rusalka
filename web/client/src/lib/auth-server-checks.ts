import { auth } from './auth';
import { headers } from 'next/headers';

type AuthTokenResponse =
  | { token: null; error: Error }
  | { token: string; error: null };

type AuthSessionResponse =
  | { user: null; isAuthenticated: false; error: Error }
  | { user: any; isAuthenticated: true; error: null };

// Server-side authentication check (token only)
export async function getServerAuthToken(): Promise<AuthTokenResponse> {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });
    if (!token) {
      return { token: null, error: new Error('Could not find the token') };
    }
    return { token, error: null };
  } catch (err) {
    return { token: null, error: err as Error };
  }
}

// Server-side authentication check (full session)
export async function getServerAuth(): Promise<AuthSessionResponse> {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      return {
        user: null,
        isAuthenticated: false,
        error: new Error('No session present'),
      };
    }
    return {
      user: session.user,
      isAuthenticated: true,
      error: null,
    };
  } catch (err) {
    return {
      user: null,
      isAuthenticated: false,
      error: err as Error,
    };
  }
}

// // Legacy function for backward compatibility
// export async function Authenticated(
//   caller: 'client' | 'server'
// ): Promise<AuthTokenResponse> {
//   if (caller === 'client') {
//     const { user, isAuthenticated, error } = await getClientAuth();
//     if (!isAuthenticated) {
//       return { token: null, error };
//     }
//     // For client, we need to get the token separately if needed
//     try {
//       const { data: session } = await authClient.getSession();
//       return { token: session?.session?.token || null, error: null };
//     } catch (err) {
//       return { token: null, error: err as Error };
//     }
//   } else {
//     return getServerAuthToken();
//   }
// }
