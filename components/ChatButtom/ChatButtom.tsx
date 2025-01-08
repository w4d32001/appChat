import { Mic, Wallpaper } from 'lucide-react'
import React from 'react'

export default function ChatButtom() {
  return (
    <div className='bg-gray-400 h-full flex justify-between px-4 items-center'>
        <div className='flex w-full items-center gap-2'>
            <Wallpaper className='w-[4%] text-blue-800'/>
            <input type="text" className='py-1 px-4 rounded-lg w-[92%] outline-none'/>
            <Mic className='w-[4%] text-blue-800'/>
        </div>
    </div>
  )
}
