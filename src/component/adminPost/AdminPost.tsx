type PostsData = {
  _id: string;
  title: string;
  desc: string;
  userId: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

async function AdminPost() {
  const res = await fetch(`http://localhost:3000/api/blog`);
  const datas: PostsData[] = await res.json();
  console.log(datas);
  return (
    <div>
      {datas.map((datas) => (
        <div key={datas._id}>
          {datas.title}
          {datas.desc}
        </div>
      ))}
    </div>
  );
}

export default AdminPost;
