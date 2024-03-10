"use server";
//!this is server action code
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { Post, User } from "../model";
import { connectToDb } from "../utils";
import { signIn, signOut } from "../auth";

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

export async function handleGithubLogin() {
  "use server";
  await signIn("github");
}
export async function handleGithubLogOut() {
  "use server";
  await signOut();
}

export async function register(formData: any) {
  const { username, password, email, img, passwordRepeat } =
    Object.fromEntries(formData);
  console.log(username, password, email, img, passwordRepeat);
  if (password !== passwordRepeat) {
    return console.log("pass word does not match");
  }

  try {
    connectToDb();
    const user = await User.findOne({ username }); //this will get the user base on username
    if (user?.email === email) {
      return console.log("email is already exist");
    }
    if (user) {
      //this will find the user if it already exists
      return console.log("user is already exist");
    }
    //!always hash your password use bcript as a example here
    const saltround = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, saltround);
    //the password is 123
    const newUser = new User({
      //this will create new user
      username,
      email,
      password: hashpassword,
      img,
    });
    await newUser.save(); //save the new user
    console.log("save user");
  } catch (error) {
    console.log(error);
    throw new Error("create fail");
  }
}

export async function login(formData: any) {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    return { error: "something when wrong" };
  }
}
