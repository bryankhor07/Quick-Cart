import { lusitana } from "@/app/ui/fonts";
import SearchBar from "@/app/ui/products/search-bar";
import ProductsListWrapper from "@/app/ui/products/products-list-wrapper";
import { Suspense } from "react";
import { ProductsGridSkeleton } from "@/app/ui/skeletons";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Products
      </h1>
      <SearchBar />
      <Suspense fallback={<ProductsGridSkeleton />}>
        <ProductsListWrapper />
      </Suspense>
    </main>
  );
}
