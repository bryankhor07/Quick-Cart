import { lusitana } from "@/app/ui/fonts";

export const metadata = {
  title: "Orders",
};

export default function OrdersPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Orders
      </h1>
    </main>
  );
}
