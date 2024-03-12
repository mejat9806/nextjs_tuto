//?this is for middleware
//!this is a extesion of the callback in the auths .
export const authConfig: any = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: any) {
      //this will add user id and isAdmin to the token and updated it
      if (user) {
        token.id = user?.id;
        token.isAdmin = user?.isAdmin;
      }
      return token;
    },
    async session({ session, token }: any) {
      //this will add token id and isAdmin to the session from the token  and updated it
      if (token) {
        session.user.id = token?.id;
        session.user.isAdmin = token?.isAdmin;
        return session;
      }
    },
    authorized({ auth, request }: any) {
      //it take the aut and request parameters
      // will get spread into the main auth in the auth.ts file
      //this is for middleware
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname?.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname?.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname?.startsWith("/login");
      //! ONLY admin can go to admin panel

      if (isOnAdminPanel && user?.isAdmin) {
        return true;
      }
      //!only authenticated users can reach  the blog page
      if (isOnBlogPage && !user) {
        return false; //if it false it will redirect to pages above .this come from  NextAuth(authConfig).auth;
      }
      //!only authenticated users can reach  the login page
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true; //if this false only login page is show up
    },
  },
};
