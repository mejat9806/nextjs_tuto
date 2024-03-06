import UserData from "@/component/UserData";
import { getPostsingle } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

/* async function getData(slug: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
} */
async function SingularBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  // const singularPostData = await getData(slug);
  // console.log(singularPostData.userId);
  const singledata = getPostsingle(slug);
  return (
    <div className=" w-full h-svh justify-center flex ">
      <div className="flex w-full justify-center">
        <div className=" imageContainerBlogSingle hidden sm:flex  flex-1 max-w-96">
          <Image
            src={
              "https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            fill
            alt="ijen"
          />
        </div>
        <div className=" flex flex-2 items-start flex-col gap-4 p-6 ">
          <h1 className="text-7xl text-teal-500 font-bold">
            {singledata?.title}
          </h1>
          <div className="flex flex-col gap-5 ">
            <div className="flex items-start gap-2">
              <div className="imageContainerBlogProfile ">
                <Image
                  src="https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  fill
                  alt="profile"
                  className="rounded-full"
                />
              </div>{" "}
              <div className="flex  flex-col">
                <div>
                  <Suspense fallback={<div>...loading</div>}>
                    <UserData userId={singledata?.userId} />
                  </Suspense>
                </div>
                <div className="flex gap-3 font-medium">
                  <span>Published</span>
                  <span>0.1.1.1.1</span>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <p className="text-[15px] flex flex-wrap">{singledata?.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingularBlogPage;
