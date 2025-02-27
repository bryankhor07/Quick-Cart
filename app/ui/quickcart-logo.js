import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { lusitana } from "/app/ui/fonts";

export default function QuickCartLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white gap-2`}
    >
      <ShoppingCartIcon className="h-14 w-14 rotate-[15deg]" />
      <p className="text-[60px]">Quick Cart</p>
    </div>
  );
}
