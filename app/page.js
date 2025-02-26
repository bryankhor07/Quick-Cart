import Image from "next/image";
import { Auth } from "./ui/auth";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Auth />
    </div>
  );
}
