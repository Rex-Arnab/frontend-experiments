import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import Logo from "./Logo";
import { CircleUserIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Topbar() {
  return (
    <div className="w-full p-2 border-b flex justify-between">
      <SidebarTrigger />
      <Logo className="text-xl" />
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <CircleUserIcon />
      </div>
    </div>
  );
}

export default Topbar;
