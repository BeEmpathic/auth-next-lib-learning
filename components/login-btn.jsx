import { useSession, sinIn, signOut } from "next-auth/react";

export default function Component() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {sessin.user.email}
                <button onClick={() => signOut}> Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signInt()}>Sign in </button>
        </>
    )
}