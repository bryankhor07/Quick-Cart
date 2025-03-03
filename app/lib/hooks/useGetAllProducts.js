"use client";

import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");
  const productsQuery = query(
    productsCollectionRef,
    orderBy("createdAt", "desc")
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(productsQuery, (snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return unsubscribe;
  }, [productsQuery]);

  return { products };
};
