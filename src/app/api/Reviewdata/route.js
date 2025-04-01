import Re from "@/app/model/Reviewmodel";
import { Connect } from "@/app/config/db";
import { NextResponse } from "next/server";

Connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { name, review } = reqBody;

    if (!name || !review) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    const newreview = new Re({ name, review });
    const savedreview = await newreview.save();

    return NextResponse.json({
      message: "Review is saved",
      success: true,
      savedreview,
    });
  } catch (error) {
    console.error("Error saving review:", error);
    return NextResponse.json(
      { message: "Error saving review", success: false, error: error.message },
      { status: 500 }
    );
  }
}