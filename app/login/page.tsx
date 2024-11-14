import React from "react";
import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      {/* Left Side */}
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
          className="mb-8"
        ></Image>
        <h1 className="mb-3 text-4xl font-bold">Welcome</h1>
        <p className="mb-8 text-muted-foreground">
          Finance AI is a financial management platform that uses AI to monitor
          your transactions and provide personalized insights, making it easier
          to control your budget.
        </p>
        <SignInButton>
          <Button variant="outline">
            <LogInIcon className="mr-2"></LogInIcon>
            Login in or Create a New Account
          </Button>
        </SignInButton>
      </div>

      {/* Right Side */}
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="Login In" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
