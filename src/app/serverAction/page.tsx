import { AddPost, DeletePost } from "@/lib/serverAction/action";

function ServerAction() {
  /*   async function sayHello() {
    "use server";
    console.log("hello");
  }
 */
  return (
    <div className="flex justify-center items-center">
      <form action={AddPost} className="flex flex-col gap-5 text-black">
        <input type="text" id="title" placeholder="title" name="title" />
        <input type="text" id="desc" placeholder="desc" name="desc" />
        <input type="text" id="slug" placeholder="slug" name="slug" />
        <input type="text" id="userId" placeholder="userID" name="userId" />
        <button className="bg-teal-200" type="submit">
          Create
        </button>
      </form>
      <form action={DeletePost} className="flex flex-col gap-5 text-black">
        <input type="text" id="id" placeholder="postId" name="id" />
        <button className="bg-teal-200" type="submit">
          delete
        </button>
      </form>
    </div>
  );
}

export default ServerAction;
