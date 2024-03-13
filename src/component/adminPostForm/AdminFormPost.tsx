"use client";

import { AddPost } from "@/lib/serverAction/action";
import { useFormState } from "react-dom";

function AdminFormPost({ userId }: any) {
  console.log(userId.user.id);
  const [state, formAction] = useFormState(AddPost, undefined);
  return (
    <form action={formAction} className="text-black formStyle">
      <input type="hidden" name="userId" value={userId.user.id} />
      <h1 className="text-white text-6xl">Add new Post</h1>
      <input type="text" name="title" id="title" placeholder="title" />
      <input type="text" name="slug" id="slug" placeholder="slug" />
      <input type="text" name="img" id="img" placeholder="img" />
      <textarea name="desc" id="desc" rows={10} placeholder="desc" />
      <div className="flex justify-center ">
        <button className="bg-teal-500 text-2xl font-extrabold px-6 py-2 rounded-xl hover:bg-teal-800 hover:text-white">
          Add Post
        </button>
      </div>
      {state && state.error}
    </form>
  );
}

export default AdminFormPost;
