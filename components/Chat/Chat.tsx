import React from 'react'
import ChatButtom from '../ChatButtom/ChatButtom'
import LeftChat from '../LeftChat/LeftChat'
import RightChat from '../RightChat/RightChat'
import ChatImageLeft from '../ChatImageLeft/ChatImageLeft'

export default function Chat() {
  return (
    <div className='h-full w-full bg-white rounded-t-lg'>
        <div className='h-[92%] flex justify-end flex-col overflow-y-auto'>
            <LeftChat />
            <RightChat />
            <ChatImageLeft />
        </div>
        <div className='h-[8%]'>
        <ChatButtom />
        </div>
    </div>
  )
}
