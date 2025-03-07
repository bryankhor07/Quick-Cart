import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const useAddOrder = () => {
  const ordersCollectionRef = collection(db, "orders");

  const addOrder = async ({
    userId,
    productName,
    totalPrice,
    imageURL,
    description,
    quantity,
  }) => {
    try {
      await addDoc(ordersCollectionRef, {
        userId,
        productName,
        imageURL,
        description,
        totalPrice,
        quantity,
        createdAt: new Date().toLocaleDateString(),
      });
    } catch (error) {
      console.error("Error adding order: ", error);
    }
  };
  return { addOrder };
};
