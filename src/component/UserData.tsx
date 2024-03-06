// import { getPostUser } from "@/lib/data";

import { getPostUser } from "@/lib/data";

async function getUserData(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId} `,
    { cache: "no-store" },
  );
  if (!res.ok) {
    throw new Error("Could not user id");
  }

  return res.json();
}
async function UserData({ userId }: { userId: number | undefined }) {
  console.log(userId);
  //const userData = await getUserData(userId);
  if (!userId) return null;
  const user = getPostUser(userId);
  //   console.log(user);
  return (
    <div className="flex gap-2">
      <h1>Author </h1>
      <span>by</span>
      <h1>{user?.name}</h1>
    </div>
  );
}

export default UserData;
