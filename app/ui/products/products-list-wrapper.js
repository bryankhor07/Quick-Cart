"use client"; // This is now a Client Component

import ProductsList from "./products-list";
import { useSearchParams } from "next/navigation";

export default function ProductsListWrapper() {
  const searchParams = useSearchParams(); // Now runs only on the client
  const query = searchParams.get("query")?.toLowerCase() || "";

  return <ProductsList query={query} />;
}
