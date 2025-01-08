import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContactProps } from "./Contact.type";

export default function Contact(props: ContactProps) {
  const { name, message, image } = props;

  return (
    <article className="flex w-full items-center gap-3 border p-2 rounded-xl">
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col relative w-full">
        <span className="text-gray-700 font-semibold">{name}</span>
        <div className="font-sans text-xs text-ellipsis overflow-hidden whitespace-nowrap max-w-[calc(100%-80px)]">
          {message}
        </div>
        <span className="absolute top-0 right-0 text-xs text-gray-400 whitespace-nowrap">
          08:28 am
        </span>
      </div>
    </article>
  );
}
