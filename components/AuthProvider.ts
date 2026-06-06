"use client";

import { SessionProvider } from "next-auth/react"
const AuthProvider = ({ children }: { children: React.ReactNode, pageProps: { session, ...pageProps } }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>;
};


export default AuthProvider;