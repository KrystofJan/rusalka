import { authClient } from './auth-client';

type AuthSessionResponse =
  | { user: null; token: null; isAuthenticated: false; error: Error }
  | { user: any; token: string; isAuthenticated: true; error: null };

// Client-side authentication check
export async function getClientAuth(): Promise<AuthSessionResponse> {
  try {
    const { data: session, error } = await authClient.getSession();
    const token = session?.session.token;
    if (!session || error) {
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        error: new Error(error?.message || 'No session present'),
      };
    }
    return {
      user: session.user,
      token: token!,
      isAuthenticated: true,
      error: null,
    };
  } catch (err) {
    return {
      user: null,
      token: null,
      isAuthenticated: false,
      error: err as Error,
    };
  }
}
