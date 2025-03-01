import { lusitana } from "@/app/ui/fonts";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Products
      </h1>
    </main>
  );
}
