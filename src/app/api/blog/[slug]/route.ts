//!this is api route method

import { Post } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: { params: any }) {
  const { slug } = params;
  console.log(slug, "on api");
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("fail to fetch post");
    }
  }
}
export async function DELETE(request: any, { params }: { params: any }) {
  const { slug } = params;
  console.log(slug, "on api");
  try {
    connectToDb();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("fail to fetch post");
    }
  }
}
