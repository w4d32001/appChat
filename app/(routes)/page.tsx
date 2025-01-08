import Chat from "@/components/Chat/Chat";
import Contact from "@/components/Contact/Contact";
import ContactGroup from "@/components/ContactGroup/ContactGroup";
import NavContact from "@/components/NavContact/NavContact";
import { Separator } from "@/components/ui/separator";
import { BotIcon, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <main className="h-svh w-svw flex">
    <div className="w-3/12 bg-white-200 flex flex-col gap-4 px-2">
      <div className="h-20 flex items-center justify-center gap-4">
        <BotIcon strokeWidth={2} className="text-blue-800 text-3xl" />
        <h1 className="text-3xl text-blue-800 uppercase font-mono">DemoChat</h1>
      </div>
      <div className="relative">
        <input type="search" className="border-blue-500 border w-full outline-none px-4 py-2 rounded-xl" />
        <Search strokeWidth={2} className="absolute top-2 right-2" />
      </div>
        <Separator />
      <div>
        <div>
          <ContactGroup />
        </div>
      </div>
    </div>
    <div className="w-9/12 h-full bg-gray-300">
      <NavContact />
      <div className="p-8 w-full h-[calc(100vh-80px)]">
        <Chat />
      </div>
    </div>
     </main>
  );
}
