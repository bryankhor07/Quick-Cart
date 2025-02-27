import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { lusitana } from "/app/ui/fonts";

export default function QuickCartLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white gap-2`}
    >
      <ShoppingCartIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Quick Cart</p>
    </div>
  );
}
