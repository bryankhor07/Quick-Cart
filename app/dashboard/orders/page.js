import { lusitana } from "@/app/ui/fonts";
import OrdersList from "@/app/ui/orders/orders-list";
import { Suspense } from "react";
import { ProductsGridSkeleton } from "@/app/ui/skeletons";

export const metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Orders
      </h1>
      <Suspense fallback={<ProductsGridSkeleton />}>
        <OrdersList />
      </Suspense>
    </main>
  );
}
