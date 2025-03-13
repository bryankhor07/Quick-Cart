import { useEffect, useState } from "react";
import { db } from "@/app/lib/firebase"; // Adjust based on your setup
import {
  collection,
  query,
  where,
  getCountFromServer,
} from "firebase/firestore";

export function useGetStockQuantity(productId) {
  const [stockQuantity, setStockQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    const fetchStockQuantity = async () => {
      setLoading(true);
      try {
        const productsRef = collection(db, "products"); // Adjust collection name
        const q = query(productsRef, where("id", "==", productId));
        const snapshot = await getCountFromServer(q);
        setStockQuantity(snapshot.data().count);
      } catch (error) {
        console.error("Error fetching stock quantity:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockQuantity();
  }, [productId]);

  return { stockQuantity, loading };
}
