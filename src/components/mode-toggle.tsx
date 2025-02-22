"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        isLight ? setTheme("dark") : setTheme("light");
      }}
    >
      {isLight ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ModeToggle;
