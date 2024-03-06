//!fetching without API

//TEMPdata

interface Post {
  id: number;
  name: string;
  body: string;
  userId: number;
  title: string;
}
const posts: (Post | number)[] = [
  {
    id: 1,
    name: "john",
    body: "e",
    userId: 1,
    title: "post 1",
  },
  { id: 2, name: "sdsd", body: "....", userId: 2, title: "post 2" },
  { id: 2, name: "sgrg", body: "....", userId: 2, title: "post 2" },
  { id: 4, name: "i7kjt", body: "....", userId: 4, title: "post 4 " },

  4,
];
const users = [
  { id: 1, name: "amer" },
  { id: 2, name: "abu" },
  { id: 3, name: "john" },
  { id: 4, name: "see" },
];

export function getPost() {
  return posts as Post[];
}
export function getPostsingle(id: any) {
  const post = posts.find(
    (post) => typeof post === "object" && post.id === parseInt(id),
  ) as Post | undefined;

  return post;
}

export function getPostUser(userId: number | undefined) {
  return users.find((user) => user.id === userId);
}
