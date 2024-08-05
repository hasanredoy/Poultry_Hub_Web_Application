import { connectDB } from "@/lib/connectDB";
const bcrypt = require("bcryptjs");
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  // jwt verification and max age
  secret: process.env.SECRET_TOKEN,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  //login in with email and password
  providers: [
    CredentialsProvider({
      // add login method
      credentials: {
        email: {},
        password: {},
      },
      // validate user
      async authorize(credentials) {
        // console.log('hello');
        const { email, password } = credentials;
        // console.log({email,password});
        // check if not email or password return null
        if (!email || !password) {
          return null;
        }
        // connect db
        const db = await connectDB();
        // get users collection
        const usersCollection = await db.collection("users");
        // get current user
        const currentUser = await usersCollection.findOne({ email });
        // console.log({currentUser});
        //return null if not user
        if (!currentUser) {
          return null;
        }
        // match password
        const matchedPass = bcrypt.compareSync(password, currentUser?.password);
        //return null if pass didn't match
        if (!matchedPass) {
          return null;
        }
        // if everything ok return current user
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks:{
    async signIn({ user, account}) {
       if(account.provider ==='google'){
        const {name , image , email,type}=user;
        console.log(user);
        const userData = {
          name,
          image,email,
          type:"user",
          registerDate:new Date(),
        }
        try  {
         const db = await connectDB()
         const usesCollection = db.collection('users')
         const existingUser = await usesCollection.findOne({email})
         if(!existingUser){
          const res = await usesCollection.insertOne(userData)
         //  console.log({"res===>":res});
          return user
         }else{
           return user
         }
 
        } catch (error) {
         
        }
       }else{
         return user
       }
 
     },
     jwt: async ({ token, user }) => {
      // If the session has been updated with new first and last names
      if (user?.firstname && user?.lastname) {
        token.firstname = user.firstname;
        token.lastname = user.lastname;
      }
      return token;
    },
   },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
