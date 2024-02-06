"use client";
import React from "react";
import { handleLoginWithGoogle } from "@/actions/auth";
import { GoogleIcon } from "@/components/auth/login/google-icon";
import { Button } from "@/components/ui/button";

export const LoginButton = () => {
  return (
    <Button
      className="gap-2"
      onClick={async () => {
        handleLoginWithGoogle();
      }}
    >
      <GoogleIcon />
      Sigin with Google
    </Button>
  );
};
