import { Connect } from "@/app/config/db";
import Consumer from "@/app/model/Consumermodel"
import { NextRequest,NextResponse } from "next/server";
Connect()

export async function GET() {
    const alluser= await Consumer.find()
    return NextResponse.json({message:true,alluser})
    
}