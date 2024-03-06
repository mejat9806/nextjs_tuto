import { postProp } from "@/app/blog/page";
import Image from "next/image";
import Link from "next/link";

function PostCard({
  src,
  title,
  post,
}: {
  src?: string;
  title?: string;
  post: postProp;
}) {
  // const titleForUse = title.replaceAll("-", " ");

  return (
    <div className="sm:w-[80%] md::w-[50%] w-full mx-auto ">
      <div className="flex">
        <div className="imageContainerBlog ">
          <Image
            src={
              "https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt={
              "https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            fill
            objectFit="cover"
          />
        </div>
        <span className="capitalize  date my-auto  ">22/22/12</span>
      </div>
      <div className="w-[80%]">
        <h1 className="first-letter:uppercase text-xl font-extrabold">
          {post.title}
        </h1>
        <p className="text-sm text-gray-400">{post.body}</p>
        <Link href={`/blog/${post.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default PostCard;
