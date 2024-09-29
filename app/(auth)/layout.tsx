import { PropsWithChildren } from "react";
import Image from "next/image";

import backgroungImage from "@/public/images/login-background.jpg";
import logo from "@/public/images/netflix-logo.svg";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-transparent">
      <Image
        src={backgroungImage}
        alt="login-bg"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        src={logo}
        alt="logo"
        height={150}
        width={150}
        className="absolute left-4 top-4"
      />
      {children}
    </div>
  );
};
export default AuthLayout;
