import User from "@/app/model/Consumermodel";
import { Connect } from "@/app/config/db";
import { NextRequest, NextResponse } from "next/server";

Connect();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const { Name, phone, email, enquiry, details } = reqBody;

        if (!Name || !phone || !email || !enquiry || !details) {
            return NextResponse.json({ message: "All fields are required", success: false }, { status: 400 });
        }


        const newUser = new User({ Name, phone, email, enquiry, details });
        const savedUser = await newUser.save();

        return NextResponse.json({ message: "User is saved", success: true, savedUser });
    } catch (error) {
        console.error("Error saving user:", error);
        return NextResponse.json({ message: "Error saving user", success: false, error: error.message }, { status: 500 });
    }
}