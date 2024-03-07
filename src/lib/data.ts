//!fetching without API

import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./model";
import { connectToDb } from "./utils";

//TEMPdata
export type postProp = {
  userId: number;
  id: number;
  title: string;
  desc: string;
  img: string;
  slug: string;
};
interface Post {
  id: number;
  name: string;
  body: string;
  userId: number;
  title: string;
  createdAt: string;
}
/*
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
]; */

export async function getPost() {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("fail to fetch error 1");
  }
}
export async function getPostsingle(slug: string) {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("fail to fetch error");
  }
}

export async function getPostUser(id: number) {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("fail to fetch error 2");
  }
}
export async function getAllUser() {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("fail to fetch error 3");
  }
}
