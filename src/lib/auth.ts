import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./model";
import { authConfig } from "./auth.config";

import bcrypt from "bcryptjs";

async function login(credentials: any) {
  try {
    connectToDb();
    const user = await User.findOne({
      //check if the user exists in the database
      username: credentials.username,
    });
    if (!user) {
      //is not throw error
      throw new Error("wrong password and email here");
    }
    const isPasswordsCorrect = await bcrypt.compare(
      //check if the crediationl  password and the user password are the same
      credentials.password,
      user.password,
    );
    if (!isPasswordsCorrect) {
      //if the password is incorrect/not the same throw error
      throw new Error("password is wrong");
    }
    return user; //if everything is ok return the user for the autrization
  } catch (err) {
    console.log(err);

    throw new Error("Failed to login");
  }
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRECT,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials); //the login Fuction is abovr
          return user; //if everything is ok autheticated the user
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    //this callbacks use to check if the user is exist in our DB and if let them signin .if not exist it will create a new user in the database and login  them
    async signIn({ account, user, profile }) {
      if (account && account.provider === "github") {
        //this if is for checking the account signIn with github or not
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email }); //this will check if the user is already exist
          if (!user) {
            //if not create a new user
            const newUser = new User({
              username: profile?.login, //this will based on the provider check the profile like above
              email: profile?.email,
              img: profile?.avatar_url,
            });
            await newUser.save(); //save the new user
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true; //if true if the user is already exist
    },
    ...authConfig.callbacks, //this will make sure if the user does not log in they will only show the login page
  },
});
