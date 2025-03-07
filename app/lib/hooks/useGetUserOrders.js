import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export const useGetUserOrders = (userId) => {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (!userId) return; // Prevent running the query if userId is missing

    const userOrdersCollectionRef = collection(db, "orders");

    // ✅ Correctly filtering by userId
    const userOrdersQuery = query(
      userOrdersCollectionRef,
      where("userId", "==", userId), // ✅ Filtering by userId
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(userOrdersQuery, (snapshot) => {
      setUserOrders(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    return () => unsubscribe(); // ✅ Cleanup function
  }, [userId]); // ✅ Only re-run when userId changes

  return { userOrders };
};
