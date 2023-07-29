import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import connect from '@/utils/db';
import User from '@/models/User';
import bcrypt from "bcrypt";



const handler =  NextAuth({
  providers: [
    // OAuth authentication providers...
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // Passwordless / email sign in
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        
        await connect()

        try {
          //Check Password
         
          const user = await User.findOne({ email: credentials.email });

          if (user)
          {
            const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
          
          if (isPasswordCorrect)
          {
            return user
          }
          else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(error)
        }
      }
   })
  ],
  pages: {
    error: "/dashboard/login"
  }
})

export  {handler as GET, handler as POST}