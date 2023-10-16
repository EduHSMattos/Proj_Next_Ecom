import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import {config} from "dotenv";

config();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

/*https://www.telerik.com/blogs/how-to-implement-google-authentication-nextjs-app-using-nextauth*/