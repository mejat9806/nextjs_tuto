import Image from "next/image";
import Link from "next/link";

function PostCard({ src, title }: { src: string; title: string }) {
  const titleForUse = title.replaceAll("-", " ");

  return (
    <div className="sm:w-[80%] md::w-[50%] w-full mx-auto ">
      <div className="flex">
        <div className="imageContainerBlog ">
          <Image src={src} alt={src} fill objectFit="cover" />
        </div>
        <span className="capitalize  date my-auto  ">22/22/12</span>
      </div>
      <div className="w-[80%]">
        <h1 className="first-letter:uppercase text-xl font-extrabold">
          {titleForUse}
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum
          nobis laudantium, excepturi sunt aliquam voluptatem culpa dolore.
          Laborum, eligendi facere aut iusto eaque quos rem omnis quaerat autem
          optio.
        </p>
        <Link href="/blog/post">Read More</Link>
      </div>
    </div>
  );
}

export default PostCard;
