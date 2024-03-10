"use server";
import { Test } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    connectToDb();
    const data = await Test.find();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}

export async function POST(req: Request, res: Response) {
  connectToDb();
  const data = await req.json();

  try {
    const dataToSbumit = new Test(data);
    await dataToSbumit.save();
    return NextResponse.json(data);
  } catch (error) {}
}
/* export async function POST(req: Request, res: Response) {
  const data = await req.json();
  console.log(data);

  return NextResponse.json(data);
} */
export async function PATCH(request: Request) {
  const data = await request.json();
  return NextResponse.json({
    data,
  });
}
