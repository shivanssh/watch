import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SignInMethods from "@/components/common/SignInMethods";

const SignIn = () => {
  return (
    <section className="py-10 px-6 bg-black/80 md:px-14 md:max-w-sm rounded">
      <form method="post" action="">
        <h2 className="text-3xl text-white font-semibold">Sign In</h2>
        <div className="space-y-3 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-[#333] placeholder:text-sm  placeholder:text-gray-500 w-full inline-block rounded"
          />
          <Button
            type="submit"
            variant="secondary"
            className="bg-[#d81f26] w-full rounded"
          >
            Sign In
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-500 mt-2">
        New to Watch?{" "}
        <Link href="/sign-up" className="text-white hover:underline">
          Sign up now
        </Link>
      </div>

      <div className="flex w-full justify-center items-center mt-4 gap-x-6 ">
        <SignInMethods />
      </div>
    </section>
  );
};

export default SignIn;
