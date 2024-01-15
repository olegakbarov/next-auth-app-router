import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)

        console.log("credentials", credentials);

        const res = await new Promise<{ ok: boolean }>((resolve) =>
          setTimeout(() => resolve({ ok: true }), 1000),
        );

        // If no error and we have user data, return it
        if (res.ok) {
          return new Promise((resolve) =>
            resolve({ id: "123", name: "J Smith", email: "123" }),
          );
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret:
    "93ddcb8acaaffa6197ca0766dfdba8797858f1397ae75995aa20c843b64ab959+a8jWHzie9Wgh",

  pages: {
    signIn: "/signin",
  },
});
