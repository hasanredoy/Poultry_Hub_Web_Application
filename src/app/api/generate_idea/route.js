import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
export const POST = async(request)=>{
  const {prompt} =await request.json()

try {
  const result = await model.generateContent(prompt);
  const resp = await result.response;
  const text = response.text();
  console.log(text);
  return NextResponse.json({text})
} catch (error) {
  return NextResponse.json({error})
  
}


}