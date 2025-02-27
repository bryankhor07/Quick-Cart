"use client";

import Image from "next/image";
import { lusitana } from "/app/ui/fonts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import QuickCartLogo from "/app/ui/quickcart-logo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "./lib/hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth(); // Get the authenticated user

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <QuickCartLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 border-4 border-blue-500">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Quick Cart.</strong> The perfect place for fast
            and convenient shopping.{" "}
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <div>
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="underline text-blue-500 hover:text-blue-700"
            >
              Sign up here
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
