import { cn } from "@/lib/utils";
import React from "react";

interface RainbowProps {
  children: React.ReactNode;
  sn: 0 | 1;
}

const gradient = [
  "bg-gradient-to-br from-sky-400 to-purple-600",
  "bg-gradient-to-r from-blue-500 to-red-500",
];
const Rainbow = ({ children, sn }: RainbowProps) => {
  return (
    <div className={cn(gradient[sn], "bg-clip-text text-transparent ")}>
      {children}
    </div>
  );
};

export default Rainbow;
