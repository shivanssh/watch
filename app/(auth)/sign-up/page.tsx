import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInMethods from "@/components/common/SignInMethods";

const SignUp = () => {
  return (
    <section className="py-10 px-6 bg-black/80 md:px-14 md:max-w-sm rounded">
      <form method="post" action="">
        <h2 className="text-3xl text-white font-semibold">Sign Up</h2>
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
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-500 mt-2">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-white hover:underline">
          Log in now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center mt-4 gap-x-6 ">
        <SignInMethods />
      </div>
    </section>
  );
};

export default SignUp;
