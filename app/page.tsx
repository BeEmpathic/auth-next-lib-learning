"use client";
import { signIn } from "next-auth/react";

export default function Home() {
  // Welcome to endless TODOS !!!!!!!!!!!!!!!!!!:
  // Make a registration form

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
