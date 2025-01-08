import React from "react";
import LeftChat from "../LeftChat/LeftChat";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ChatImageLeft() {
  return (
    <div className="flex gap-2 max-w-[85%] pl-6">
      <div className="flex items-end gap-2 ">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="bg-gray-100 rounded-xl">
        <div className="flex justify-center">
          <img
            className="h-80 object-cover rounded-lg"
            src="https://th.bing.com/th/id/R.9c0d292730c1b6b14bf0d2c8fe720eb6?rik=cPJPFxRAZUOCeA&pid=ImgRaw&r=0"
            alt=""
          />
        </div>

        <div className="flex flex-col relative min-w-20">
          <div className="relative bg-gray-100 px-3 py-2 rounded-lg inline-block">
            <span className="font-sans text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              laboriosam cum numquam reiciendis expedita voluptate eligendi,
              iusto unde molestias omnis beatae ex voluptatum optio, corrupti
              recusandae odio ducimus porro doloribus?
            </span>
            <span className="absolute -bottom-5 right-0 text-xs text-gray-400">
              08:28 am
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
