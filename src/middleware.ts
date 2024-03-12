import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)", //!matcher allos us to filter middleware to run or not run on specific path .if you dont add any mathcer .middleware will be invoked for every route in your project
};
