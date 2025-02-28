"use client";

import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase.js";
import { useRouter } from "next/navigation";
import useAuth from "../lib/hooks/useAuth";
import { useEffect, useState } from "react";
import { CardSkeleton } from "../ui/skeletons.js";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth(); // Get the authenticated user

  const [isLoggingOut, setIsLoggingOut] = useState(false); // Track if user is logging out

  // Only redirect to login if NOT logging out and user is NOT logged in
  useEffect(() => {
    if (!loading && !user && !isLoggingOut) {
      router.push("/login");
    }
  }, [user, loading, isLoggingOut, router]);

  const logout = async () => {
    try {
      setIsLoggingOut(true); // Set flag before logging out
      await signOut(auth);
      router.push("/"); // Redirect to Landing Page after logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Show loading message while waiting for Firebase authentication
  if (loading) {
    return <CardSkeleton />;
  }
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
