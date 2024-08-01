import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"
const bcrypt = require('bcryptjs');

export const POST=async(request)=>{
  const userData = await request.json()
  // console.log(userData);
  try {
    const db = await connectDB()
    // console.log('hello');
    // connect usersCollection 
  const usersCollection = await db.collection('users')
  // console.log({usersCollection});
  // check user exist or not
  const checkUser= await usersCollection.findOne({email:userData.email})
  let salt = bcrypt.genSaltSync(10);
  let hashedPass = bcrypt.hashSync(userData.password, salt);
  const userWithHashedPass = {
    name:userData?.name,
    email:userData?.email,
    phone:userData?.phone,
    registerDate:userData?.registerDate,
    type:userData?.type,
    image:userData?.imageURL,
    password:hashedPass
  }
  if(checkUser){
    return NextResponse.json({message:"user exist"})
  }
  const result = await usersCollection.insertOne(userWithHashedPass)
  // console.log({result},'hello2');
  return NextResponse.json(result?{result}:{})
} catch (error) {
   return NextResponse.json({error})
  
 }
}