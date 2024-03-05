import Image from "next/image";
import Link from "next/link";

function SingularBlogPage() {
  return (
    <div className="flex gap-10 justify-center ">
      <div className="imageContainerBlogSingle flex-[1] hidden md:flex">
        <Image
          src={
            "https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill
          alt="ijen"
        />
      </div>
      <div className=" flex-[2] flex items-start flex-col gap-4 p-6">
        <h1 className="text-7xl text-teal-500 font-bold">Title</h1>
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
              <div className="flex gap-2">
                <h1>Author </h1>
                <span>by</span>
                <h1 className="first-letter:capitalize">amer</h1>
              </div>
              <div className="flex gap-3 font-medium">
                <span>Published</span>
                <span>0.1.1.1.1</span>
              </div>
            </div>
          </div>

          <div className="sm:w-[80%] w-full">
            <p className="text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              sunt commodi deleniti quam quasi laborum consectetur saepe eius
              quis et non id, dignissimos inventore culpa iste ex laboriosam
              molestiae suscipit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingularBlogPage;
