import UserData from "@/component/UserData";
import { getPostsingle } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
async function getData(slug: string) {
  // //!this is using api route
  const res = await fetch(`http://127.0.0.1:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error(res.statusText.toString());
  }
  return res.json();
}
export const generateMetadata = async function ({
  //this good for SEO this dynamically generated
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params; //params is a way to get the seachparams
  const post = await getData(slug);

  // const post = await getPostsingle(slug);//!this for server action

  return {
    title: post.title,
    description: post.desc,
  };
};

// async function deleteData(slug: string) {
//   // //!this is using api route
//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
//     method: "DELETE",
//   });
//   if (!res.ok) {
//     throw new Error(res.statusText.toString());
//   }
//   return res.json();
// }

/* async function post(slug: string) {
  // //!this is using api route
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    method: "POST",
    body: JSON.stringify(slug),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    throw new Error(res.statusText.toString());
  }
  return res.json();
} */
async function SingularBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  console.log(slug, "at line 31 page");
  const post = await getData(slug);
  console.log(post);
  // console.log(singularPostData.userId);
  //const post = await getPostsingle(slug); //!this for server action
  return (
    <div className=" w-full h-svh justify-center flex ">
      <div className="flex w-full justify-center">
        <div className=" imageContainerBlogSingle hidden md:flex  flex-1 max-w-96 min-w-[200px]">
          <Image src={post.img} fill alt="ijen" />
        </div>
        <div className=" flex flex-2 items-start flex-col gap-4 p-6 ">
          <h1 className="text-7xl text-teal-500 font-bold">{post.title}</h1>
          <div className="flex flex-col gap-5 ">
            <div className="flex items-start gap-2">
              <div className="flex  flex-col">
                <div>
                  <Suspense fallback={<div>...loading</div>}>
                    <UserData userId={post.userId} />
                  </Suspense>
                </div>
                <div className="flex gap-3 font-medium">
                  <span>Published</span>
                  <span>
                    {post.createdAt?.toString()?.slice(4, 16) || "12/12/121"}
                  </span>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <p className="text-[15px] flex flex-wrap">{post.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingularBlogPage;
