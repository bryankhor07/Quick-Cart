"use client";

import { useGetAllProducts } from "@/app/lib/hooks/useGetAllProducts";
import { useDeleteProduct } from "@/app/lib/hooks/useDeleteProduct";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductModal from "./product-modal";
import { ProductsGridSkeleton } from "@/app/ui/skeletons";
import useAuth from "../../lib/hooks/useAuth";
import { Suspense } from "react";

function ProductsListContent() {
  const { products } = useGetAllProducts();
  const { deleteProduct } = useDeleteProduct();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  const { user, loading } = useAuth(); // Get the authenticated user

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleDeleteProduct = (productID) => {
    deleteProduct(productID);
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={
              "relative border p-4 rounded-lg shadow-md bg-white cursor-pointer"
            }
            onClick={() => handleProductClick(product)}
          >
            <img
              src={product.imageURL}
              alt={product.name}
              className="w-full h-48 object-contain rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">
              {product.description.split(" ").slice(0, 10).join(" ")}...
            </p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            {user?.email === "bob@gmail.com" && (
              <button
                className="flex mt-2 h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteProduct(product.id);
                }}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default function ProductsList() {
  return (
    <Suspense fallback={<ProductsGridSkeleton />}>
      <ProductsListContent />
    </Suspense>
  );
}
