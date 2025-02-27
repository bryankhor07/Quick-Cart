"use client";

import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase.js";
import { useRouter } from "next/navigation";
import useAuth from "../lib/hooks/useAuth";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { user } = useAuth(); // Get the authenticated user

  // Redirect if user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  const logout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
      router.push("/"); // Redirect to Landing Page after logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      Dashboard Page
      <button
        onClick={logout}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
}
