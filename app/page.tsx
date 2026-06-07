"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  // Welcome to endless TODOS !!!!!!!!!!!!!!!!!!:
  // - Make so user can sign in with it's own credentials good luck cause it requires a freaking mailing server which is another story xD
  // as a good part you would have to do the mailing server anyway xD

  return (
    <div>
      Just a normal div
      <button
        className={"cursor-pointer border m-5 p-5"}
        onClick={() => signIn()}
      >
        This is how sign in looks like
      </button>
    </div>
  );
}
