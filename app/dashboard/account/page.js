import { lusitana } from "@/app/ui/fonts";

export const metadata = {
  title: "Account",
};

export default function OrdersPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Account
      </h1>
    </main>
  );
}
