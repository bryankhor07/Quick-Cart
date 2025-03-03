"use client";

import ProductsList from "./products-list";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProductsListWrapper() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setQuery(searchParams.get("query")?.toLowerCase() || "");
  }, []);

  return <ProductsList query={query} />;
}
