/*
 * This is heavily inspired by https://github.com/dreamsofcode-io/authly/blob/a61270506fe86e13351a1d362bb80f769730e6c1/app/src/lib/go-api-client.ts
 *
 * Mostly copied everything from there, as I used Dreams of codes tutorial to get betterauth working, I will not use this one howeven because I like the api proxying stuff, and I will probably deploy on vps anyway.
 *
 * Don't export anything, because I did not need it really
 */

import { authClient } from '@/lib/auth-client';
// import { jwtDecode } from 'jwt-decode';

const GO_API_URL =
  process.env.NEXT_PUBLIC_GO_API_URL || 'http://localhost:8080';

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

interface UserProfile {
  id: string;
  email: string;
  name: string;
}

interface AuthVerifyResponse {
  valid: boolean;
  userId?: string;
  email?: string;
}

class GoApiClient {
  private baseUrl: string;
  private token: string | null;

  constructor(baseUrl: string = GO_API_URL) {
    this.baseUrl = baseUrl;
    this.token = null;
  }

  private isTokenValid() {
    if (!this.token) {
      return false;
    }

    // removing the dependency so this wont work
    // const jwt = jwtDecode(this.token);
    // if (!jwt.exp) {
    //   return false;
    // }
    return true;
  }

  private async getToken() {
    if (this.isTokenValid()) {
      return this.token;
    }

    const token = (await authClient.token()).data?.token || null;
    this.token = token;
    return this.token;
  }

  private async request<T = unknown>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const token = await this.getToken();

      if (!token) {
        return {
          error: 'No authentication token available. Please sign in.',
          status: 401,
        };
      }

      // Send request
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...options.headers,
        },
      });

      const body = await response.json();

      if (!response.ok) {
        return {
          error:
            body.message ||
            `API Error: ${response.status} ${response.statusText}`,
          status: response.status,
        };
      }

      console.log(body);
      return {
        data: body,
        status: response.status,
      };
    } catch (error) {
      return {
        error:
          error instanceof Error ? error.message : 'Unknown error occurred',
        status: 0,
      };
    }
  }

  async verifyAuth(): Promise<ApiResponse<AuthVerifyResponse>> {
    return this.request('/api/auth/verify', {
      method: 'GET',
    });
  }
}

const goApiClient = new GoApiClient();
