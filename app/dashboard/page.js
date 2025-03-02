import { lusitana } from "@/app/ui/fonts";
import MostPopularItems from "../ui/dashboard/most-popular-items";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <MostPopularItems />
    </main>
  );
}
