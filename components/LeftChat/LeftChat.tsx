  import React from "react";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

  export default function LeftChat() {
    return (
      <div className="w-auto max-w-[90%] flex relative p-6 gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col relative min-w-20">
          <div className="relative bg-gray-100 px-3 py-2 rounded-lg inline-block">
            <span className="font-sans text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laboriosam cum numquam reiciendis expedita voluptate eligendi, iusto unde molestias omnis beatae ex voluptatum optio, corrupti recusandae odio ducimus porro doloribus?</span>
            <span className="absolute -bottom-5 right-0 text-xs text-gray-400">
              08:28 am
            </span>
          </div>
        </div>
      </div>
    );
  }
