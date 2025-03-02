import { lusitana } from "@/app/ui/fonts";
import SearchBar from "@/app/ui/products/search-bar";

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
    </main>
  );
}
