import { Connect } from "@/app/config/db";
import Consumermodel from "@/app/model/Consumermodel";
import { NextRequest, NextResponse } from "next/server";

   
Connect();
 
export async function POST(req){
    
    const reqbody=await req.json();
    const {email,password}=reqbody;
    try {
        if(email=="Ankur@wellcometours.com" && password=="Ankur@9811"){
            return NextResponse.json({message:"login sucessfull",success:true});
            
            
        }
        
    } catch (error) {
        return NextResponse.json({message:"error in login",success:false},{status:400});
        
    }
}