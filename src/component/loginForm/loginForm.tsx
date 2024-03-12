"use client";
import { handleGithubLogin, login } from "@/lib/serverAction/action";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { useFormState } from "react-dom";

function LoginForm() {
  const [state, formAction] = useFormState(login, undefined); //we get the error message from this

  console.log(state);
  return (
    <div className="h-full py-5">
      <form action={formAction} className="formStyle">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          className={state?.error ? "bg-red-300 focus:bg-white" : ""}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className={state?.error ? "bg-red-300 focus:bg-white" : ""}
        />
        <button className="bg-teal-500 text-white capitalize p-2">login</button>
      </form>
      <div>
        {state?.error && (
          <p className="text-red-300 font-extrabold first-letter:capitalize text-center mt-4">
            {state?.error}
          </p>
        )}
      </div>
      <Link href={"/register"}>
        <span className="text-white first-letter:capitalize text-center">
          not have accout ? register here
        </span>{" "}
      </Link>
    </div>
  );
}

export default LoginForm;
