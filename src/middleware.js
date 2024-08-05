import { NextResponse } from "next/server";

export const middleware= async(request)=>{
  // get token
  const token = cookies(request).get('__Secure-next-auth.session-token')
  console.log({token});
  // get pathname 
  const pathname = await request.nextUrl.pathname
  // if pathname is api then call next 
  if(pathname.includes('api')){
   return NextResponse.next()
  }
// if not token then redirect  to login page
  if(!token){
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`,request.url))
  }
  return NextResponse.next()  
}

export const config={
  matcher:["/dashboard/:path*",'/all_chicken_feeds/:path*','/become_seller/:path*','/generate_idea/:path*']
}