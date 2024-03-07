// import { getPostUser } from "@/lib/data";

import { getPostUser } from "@/lib/data";
import Image from "next/image";
/* 
async function getUserData(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId} `,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Could not user id");
  }

  return res.json();
} */
async function UserData({ userId }: { userId: number | undefined }) {
  //const userData = await getUserData(userId);
  if (!userId) return null;
  const user = await getPostUser(userId);
  return (
    <div className="flex gap-2 mb-5 items-center">
      <div className="imageContainerBlogProfile ">
        <Image
          src={user.img ? user.img : "/noavatar.png"}
          fill
          alt="profile"
          className="rounded-full"
        />
      </div>{" "}
      <div className="flex gap-2">
        <h1>Author </h1>
        <span>by</span>
        <h1 className="first-letter:uppercase">{user?.username}</h1>
      </div>
    </div>
  );
}

export default UserData;
