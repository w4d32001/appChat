import React from 'react'
import ChatButtom from '../ChatButtom/ChatButtom'
import LeftChat from '../LeftChat/LeftChat'

export default function Chat() {
  return (
    <div className='h-full w-full bg-white rounded-t-lg'>
        <div className='h-[92%] flex justify-end flex-col'>
            <LeftChat />
        </div>
        <div className='h-[8%]'>
        <ChatButtom />
        </div>
    </div>
  )
}
