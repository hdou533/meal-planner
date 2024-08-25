"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../button";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const UserInfo = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      <Link href={"/my-meal-plans"}>
        <Button variant={"outline"}>My Meal Plans</Button>
      </Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            baseTheme: resolvedTheme === "dark" ? dark : undefined,
          }}
        />
      </SignedIn>
    </div>
  );
};

export default UserInfo;
