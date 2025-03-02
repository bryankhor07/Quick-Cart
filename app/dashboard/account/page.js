import { lusitana } from "@/app/ui/fonts";
import Settings from "../../ui/account/settings";

export const metadata = {
  title: "Account",
};

export default function AccountPage() {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Account
      </h1>
      <Settings />
    </div>
  );
}
