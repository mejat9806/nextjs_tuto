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
async function UserData({ userId }: { userId: number }) {
  console.log(userId);
  const userData = await getUserData(userId);
  return (
    <div className="flex gap-2">
      <h1>Author </h1>
      <span>by</span>
      <h1>{userData.username}</h1>
    </div>
  );
}

export default UserData;
