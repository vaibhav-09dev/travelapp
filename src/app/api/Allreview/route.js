import { Connect } from "@/app/config/db";
import Review from "@/app/model/Reviewmodel";
import { NextResponse } from "next/server";

Connect();

export async function GET() {
  try {
    const alluser = await Review.find();
    return NextResponse.json({ message: true, alluser });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { message: "Error fetching reviews", success: false, error: error.message },
      { status: 500 }
    );
  }
}