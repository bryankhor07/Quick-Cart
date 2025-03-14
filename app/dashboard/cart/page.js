import { lusitana } from "@/app/ui/fonts";
import CartList from "@/app/ui/cart/cart-list";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Shopping Cart
      </h1>
      <CartList />
    </main>
  );
}
