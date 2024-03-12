"use client";

import { register } from "@/lib/serverAction/action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";

function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);
  console.log(formAction);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [router, state?.success]);

  return (
    <form action={formAction} className="formStyle">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        className={
          state?.emailError || state?.FormError || state?.noData
            ? "bg-red-300 ring-1 ring-red-500"
            : ""
        }
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        className={
          state?.emailError || state?.FormError || state?.noData
            ? "bg-red-300 ring-1 ring-red-500"
            : ""
        }
      />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="password"
        className={
          state?.password || state?.FormError || state?.noData
            ? "bg-red-300 ring-1 ring-red-500 focus:bg-inherit"
            : ""
        }
      />
      <input
        type="text"
        name="passwordRepeat"
        id="passwordRepeat"
        placeholder="password"
        className={
          state?.password || state?.FormError || state?.noData
            ? "bg-red-300 ring-1 ring-red-500"
            : ""
        }
      />
      <button
        type="submit"
        className="bg-teal-300 py-4 px-2 uppercase font-extrabold"
      >
        create
      </button>
      <div className="bellow">
        {state?.error}
        {state?.noData}
        {/* state?.error come from he api  the error come fomr the return if it error  */}

        <Link href={"/login"}>Have accout ? log in here</Link>
      </div>
    </form>
  );
}

export default RegisterForm;
