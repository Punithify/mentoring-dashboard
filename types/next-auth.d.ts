import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      email: string | null;
      password: string | null;
      token: string | null;
      user_type: 'ADMIN' | 'USER' | null;
      refresh_token: string | null;
      created_at: Date;
      updated_at: Date;
      mentor_id: string | null;
      user_id: string;
    };
  }
}
