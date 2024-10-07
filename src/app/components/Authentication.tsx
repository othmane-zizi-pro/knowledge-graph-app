import { signIn, signOut, useSession } from "next-auth/react";

const Authentication = () => {
  const { data: session, status } = useSession();

  // Log environment variables for debugging purposes
  console.log("Session data:", session);
  console.log("Session status:", status);
  console.log("Google ID (GOOGLE_ID):", process.env.GOOGLE_ID);
  console.log("Google Secret (GOOGLE_SECRET):", process.env.GOOGLE_SECRET);

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Authentication;
