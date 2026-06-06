import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account }) {
            if(account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token, user}) {
            session.accessToken = token.accessToken
            return session
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}