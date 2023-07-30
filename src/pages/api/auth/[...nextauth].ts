import { PrismaClient } from "@prisma/client";
import NextAuth, { AuthOptions } from "next-auth";
import GitlabProvider from "next-auth/providers/gitlab";
import { withIronSession } from "next-iron-session";

const prisma = new PrismaClient();

export const authOption: AuthOptions = {
  secret: "aaaaa",

  providers: [
    GitlabProvider({
      clientId: process.env.GITLAB_CLIENT_ID as string,
      clientSecret: process.env.GITLAB_CLIENT_SECRET as string,
      authorization: {
        url: "http://localhost/oauth/authorize",
      },
      token: "http://localhost/oauth/token",
      userinfo: "http://localhost/api/v4/user",
      checks: ["pkce", "state"],
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.username,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async session(params) {
      let token;
      if (params.session.user?.email) {
        token = await prisma.token.findFirst({
          where: {
            email: params.session.user?.email,
          },
        });
      }
      return { ...params.session, token: token?.token };
    },
  },
};
export default NextAuth(authOption);
