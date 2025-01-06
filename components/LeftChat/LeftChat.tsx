import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LeftChat() {
  return (
    <div className="w-auto max-w-[90%] flex relative p-4 gap-8">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col relative min-w-20">
        <span className="text-gray-700 font-bold">Pedro</span>
        <span className="font-sans text-sm">Hola</span>
        <span className="absolute top-8 right-0 text-xs text-gray-400">
          08:28 am
        </span>
      </div>
    </div>
  );
}
