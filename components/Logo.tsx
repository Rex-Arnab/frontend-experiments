import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <Link href={"/"}>
      <h1 className={cn("text-3xl font-bold font-sans text-center", className)}>
        LearnZo
      </h1>
    </Link>
  );
}

export default Logo;
