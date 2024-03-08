//!this is api route method

import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      NextResponse.error;
    }
  }
}
