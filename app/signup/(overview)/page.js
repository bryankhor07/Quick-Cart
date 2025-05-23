import QuickCartLogo from "/app/ui/quickcart-logo";
import { Suspense } from "react";
import SignUpForm from "/app/ui/signup-form";

export const metadata = {
  title: "Sign Up",
};

export default function SignUpPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-full h-full flex items-center justify-center text-white">
            <QuickCartLogo />
          </div>
        </div>
        <Suspense>
          <SignUpForm />
        </Suspense>
      </div>
    </main>
  );
}
