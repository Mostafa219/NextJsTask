import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
console.log("NEXTAUTH_SECRET =", process.env.NEXTAUTH_SECRET);
console.log(process.env.TEST_ENV);
