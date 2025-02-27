import { auth } from "../firebase.js";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return { user };
}
