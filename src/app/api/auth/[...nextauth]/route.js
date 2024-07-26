import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
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
        // get current user 
        const currentUser = await usersCollection.findOne({email})
       //return null if not user
        if(!currentUser){
          return null
        }
        // match password 
        const matchedPass = bcrypt.compareSync(password , currentUser?.password)
         //return null if pass didn't match
         if(!matchedPass){
          return null
        }
        // if everything ok return current user
        return currentUser
      },
      pages:{
        signIn:'/login'
      }
    })
  ]


})

export {handler as GET , handler as POST}