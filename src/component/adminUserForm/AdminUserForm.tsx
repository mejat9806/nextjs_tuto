"use client";

import { AddPost, AddUser } from "@/lib/serverAction/action";
import { useFormState } from "react-dom";

function AdminUserForm() {
  const [state, formAction] = useFormState(AddUser, undefined);
  return (
    <form action={formAction} className="text-black formStyle">
      <h1 className="text-white text-6xl">Add new User</h1>
      <input type="text" name="username" id="username" placeholder="username" />
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <select name="admint" id="">
        <option value={"false"} selected disabled>
          Is Admin
        </option>
        <option value={"false"}>User</option>
        <option value={"true"}>Admin</option>
      </select>
      <button className="bg-teal-500 text-2xl font-extrabold px-6 py-2 rounded-xl hover:bg-teal-800 hover:text-white">
        Add User
      </button>{" "}
      {state && state.error}
    </form>
  );
}

export default AdminUserForm;
