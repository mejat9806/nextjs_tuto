"use server";
//!this is server action code
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { Post, User } from "../model";
import { connectToDb } from "../utils";
import { signIn, signOut } from "../auth";

export async function AddPost(prevState: any, formData: any) {
  //prevStae is nexxessary for useFormState
  /* const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userID = formData.get("userId"); */
  console.log(formData);
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });
    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("Post successfully created");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return { error: "adding post fail" };
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
  console.log(id);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("Post successfully delete");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
  console.log();
}
export async function AddUser(previousState: any, formData: any) {
  /* const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userID = formData.get("userId"); */
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new User({ username, email, password, img });
    await newPost.save();
    revalidatePath("/admin"); //this will refetch our data
    console.log("User successfully created");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return { error: "adding User fail" };
    }
  }
  console.log(username, email, password, img);
}

export async function DeleteUser(formData: any) {
  /* const title = formData.get("title");
  const desc = formData.get("desc");
  const slug = formData.get("slug");
  const userID = formData.get("userId"); */
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.deleteMany({ userID: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin"); //this will refetch our data
    console.log("User successfully deleted");
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

export async function register(previousState: any, formData: any) {
  console.log(previousState);
  const { username, password, email, img, passwordRepeat } =
    Object.fromEntries(formData);
  if (username && password && email === "") {
    return { FormError: "form empty" };
  }
  console.log(username, password, email, img, passwordRepeat);
  if (password !== passwordRepeat) {
    return { password: "Password did not match" };
  }

  try {
    connectToDb();
    const user = await User.findOne({ username }); //this will get the user base on username
    if (user?.email === email) {
      return { emailError: "email is already exist" };
    }
    if (user) {
      //this will find the user if it already exists
      return { error: "user is already exist" };
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
    return { success: true };
  } catch (error) {
    console.log(error);
    return { noData: "Form is empty" };
  }
}

export async function login(previousState: any, formData: any) {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      if (error.message.includes("CredentialsSign")) {
        return { error: " please check your email and password again" };
      }
    }
    throw error; //this throw error is for NEXT_redirect_error
  }
}
