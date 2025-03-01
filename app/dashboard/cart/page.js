import { lusitana } from "@/app/ui/fonts";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Cart</h1>
    </main>
  );
}
