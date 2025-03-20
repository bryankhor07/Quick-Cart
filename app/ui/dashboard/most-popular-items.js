"use client";

import { useEffect, useState, useRef } from "react";
import { useGetTopRatedProducts } from "@/app/lib/hooks/useGetTopRatedProducts";
import ProductModal from "../products/product-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function MostPopularItems() {
  const [popularProducts, setPopularProducts] = useState([]);
  const { getTopRatedProducts, loading } = useGetTopRatedProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const products = await getTopRatedProducts();
      setPopularProducts(products);
    }
    fetchData();
  }, [getTopRatedProducts]);

  if (loading)
    return <div className="flex justify-center py-8">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto py-4">
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Most Popular Products
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1} // Dynamically adjust using breakpoints
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {popularProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="border rounded-lg shadow-md p-4 h-full cursor-pointer dark:bg-white"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.imageURL}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2 truncate">
                {product.name}
              </h3>
              <p className="text-yellow-500">
                {product.averageRating.toFixed(1)} ⭐
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
