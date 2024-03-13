import Image from "next/image";
import NoImage from "../NoImage";
import { DeletePost } from "@/lib/serverAction/action";
import { getPost } from "@/lib/data";

type PostsData = {
  _id: string;
  title: string;
  desc: string;
  userId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  img: string;
};

async function AdminPost() {
  // const res = await fetch(`http://localhost:3000/api/blog`);
  //const datas: PostsData[] = await res.json();
  const posts: any[] = await getPost();
  async function DeletePostWithID(id: string) {
    "use server";
    return DeletePost.bind(null, id);
  }
  return (
    <div className="">
      <h1 className="text-6xl"> Posts</h1>
      <div>
        {posts.map((data) => (
          <div key={data.id} className=" ">
            <div className="flex w-[500px]">
              <div className="AdminImg flex gap-4 mt-5 flex-1">
                <Image
                  src={data.img || "/noavatar.png"}
                  alt={data.img}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <h1>{data.title}</h1>
                  <h2>
                    {data.createdAt
                      ? new Date(data.createdAt).toLocaleString()
                      : "no Date data"}
                  </h2>
                </div>
              </div>
              <form
                action={DeletePost}
                className="flex items-center justify-center"
              >
                <input type="hidden" name="id" value={data.id} />
                <button>Delete</button>
              </form>
            </div>
            {/*  <form action={() => DeletePostWithID(id)}> this form is problematic we can create a new component just for this form and pass the id as a prop
              <input type="hidden" name="userId" value={data.userId} />
            </form> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPost;
