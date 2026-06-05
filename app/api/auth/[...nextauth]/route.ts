import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import bcrypt from "bcryptjs"

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}