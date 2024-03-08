import PostCard from "@/component/postCard/PostCard";
import { getPost, postProp } from "@/lib/data";

/* const postsTest = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/20447470/pexels-photo-20447470/free-photo-of-kawah-ijen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "photo-of-kawah-ijen",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/20350889/pexels-photo-20350889/free-photo-of-a-church-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "photo-of-a-church-in-the-background",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/15267028/pexels-photo-15267028/free-photo-of-close-up-of-vintage-bicycle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "close-up-of-vintage-bicycle",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/19780239/pexels-photo-19780239/free-photo-of-trees-on-snowy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "trees-on-snowy-day",
  },
];
 */

async function getData() {
  //!this is using api route
  const res = await fetch("http://localhost:3000/api/blog", {
    // cache: "no-store",
    next: { revalidate: 3000 },
  });
  if (!res.ok) {
    throw new Error("Error went wrong");
  }
  const data = await res.json();
  return data;
}
async function BlogPage() {
  const posts = await getData();
  //const posts = await getPost(); //fetch without api //!this for server action
  return (
    <div className="mx-auto w-[80%] mb-32">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 ">
        {posts.map((post: postProp) => (
          <PostCard post={post} key={post.id} />
        ))}
        {/*  {postsTest.map((post) => (
          <PostCard src={post.url} key={post.id} title={post.title} />
        ))} */}
      </div>
    </div>
  );
}

export default BlogPage;
