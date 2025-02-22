import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User2 } from "lucide-react";
import React from "react";

const AuthButton = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button variant="secondary">
            <User2 className="size-4" />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default AuthButton;
