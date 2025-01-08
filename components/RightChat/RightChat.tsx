import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function RightChat() {
  return (
    <div className="w-auto flex relative p-6 gap-2 justify-end">
      <div className="flex flex-col relative min-w-20 w-[85%]">
        <div className="relative bg-blue-100 px-3 py-2 rounded-lg inline-block">
          <span className="font-sans text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti quam non asperiores voluptate, quos, sapiente autem quod neque provident a? Enim dolor amet iste magni ipsam voluptates quasi nulla.</span>
          <span className="absolute -bottom-5 left-0 text-xs text-gray-400">
            08:28 am
          </span>
        </div>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}
