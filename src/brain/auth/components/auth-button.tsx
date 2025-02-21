import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import { User2 } from "lucide-react";
import React from "react";

const AuthButton = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button variant="ghost" size="icon">
            <User2 className="size-4" />
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
