import { postProp } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

function PostCard({ post }: { post: postProp }) {
  // const titleForUse = title.replaceAll("-", " ");

  return (
    <div className="sm:w-[80%] md::w-[50%] w-full mx-auto ">
      <div className="flex">
        <div className="imageContainerBlog ">
          {post.img ? (
            <Image src={post.img} alt={post.img} fill objectFit="cover" />
          ) : (
            <div className=" h-full w-full flex justify-center items-center backdrop-blur-3xl bg-teal-200/20 ">
              <div className="h-1/2 w-1/2 flex justify-center items-center backdrop-blur-3xl  bg-red-400/90 ">
                <h1 className="text-black text-5xl font-extrabold  ">
                  No Image
                </h1>
              </div>
            </div>
          )}
        </div>
        <span className="capitalize  date my-auto  ">22/22/12</span>
      </div>
      <div className="w-[80%]">
        <h1 className="first-letter:uppercase text-xl font-extrabold">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400">{post.desc}</p>
        <Link href={`/blog/${post.slug}`}>Read More</Link>
      </div>
    </div>
  );
}

export default PostCard;
