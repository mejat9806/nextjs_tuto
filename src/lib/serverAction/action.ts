"use server";

import { revalidatePath } from "next/cache";
import { Post } from "../model";
import { connectToDb } from "../utils";

export async function AddPost(formData: any) {
  /* const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userID = formData.get("userId"); */
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    console.log("Post successfully created");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  console.log(title, desc, slug, userId);
}
export async function DeletePost(formData: any) {
  /* const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userID = formData.get("userId"); */
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    console.log("Post successfully created");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  console.log();
}
