import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider session={session}>
      <div>Test</div>
    </SessionProvider>
  );
}
