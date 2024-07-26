import { connectDB } from "@/lib/connectDB";

const { default: NextAuth } = require("next-auth/next");

const handler  = NextAuth({
  // jwt verification and max age 
  secret:process.env.SECRET_TOKEN,
  session:{
    strategy:"jwt",
    maxAge:30*24*60*60
  },
  //login in with email and password
  providers:[
    CredentialsProvider({
      // add login method 
      credentials:{
        email:{},
        password:{}
      },
      // validate user
      async authorized(credentials){
        const {email,password}=credentials
        // check if not email or password return null
        if(!email||!password){
          return null
        }
        // connect db 
        const db = await connectDB()
        // get users collection
        const usersCollection= await db.collection('users')
        
      }
    })
  ]


})

export {handler as GET , handler as POST}