import { NextResponse } from "next/server";

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
export const POST = async(request)=>{
  const {prompt} =await request.json()

try {
  const result = await model.generateContent(prompt);
  const resp = await result.response;
  const text = resp.text();
  console.log(text);
      //  Remove special characters (*, etc.)
      let normalizedText = text.replace(/[*]/g, '');

      // Normalize white spaces
      normalizedText = normalizedText.replace(/\s+/g, ' ').trim();
  
  return NextResponse.json({text:normalizedText})
} catch (error) {
  return NextResponse.json({error})
  
}


}