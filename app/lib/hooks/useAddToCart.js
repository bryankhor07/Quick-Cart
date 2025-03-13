import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const useAddToCart = () => {
  const cartCollectionRef = collection(db, "cart");

  const addToCart = async (
    productId,
    name,
    price,
    imageURL,
    category,
    description
  ) => {
    try {
      await addDoc(cartCollectionRef, {
        productId,
        name,
        price,
        imageURL,
        category,
        description,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };
  return { addToCart };
};
