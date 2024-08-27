
import { getSession } from "next-auth/react"
import { NextResponse } from "next/server"

export const POST=async(request)=>{
  const session = await getSession({request})
   const {name}= await request.json()
  try {
  const updateUser = await prisma.user.update({
    where:{id : session.user.id},
    data:{name}
  })
  // //console.log({result},'hello2');
  return NextResponse.json({result:updateUser})
} catch (error) {
   return NextResponse.json({error})
  
 }
}