"use client";

import { getAuth, deleteUser } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase"; // Import Firestore instance

export const useDeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();

  const deleteAccount = async () => {
    if (!auth.currentUser) {
      setError("No user is currently signed in.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const user = auth.currentUser;

      // Delete user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      await deleteDoc(userDocRef);

      // Delete user from Firebase Authentication
      await deleteUser(user);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { deleteAccount, loading, error };
};
