import React from 'react'
import { GrEmoji } from "react-icons/gr";
import { VscMic } from "react-icons/vsc";
import { FiPaperclip } from "react-icons/fi";

export default function ChatBox() {
  return (
    <div className='ChatBox'>
        <div className='h-[10%] bg-[#2d2d2d] flex items-center p-4 gap-4'>
          <img src='/Profile/photo.jpg' alt="Img" className='w-[50px] h-[50px] rounded-full' />
          <span className='text-lg font-Nunito'>N.Balahariraj</span>
        </div>
        <div className="h-[80%] flex flex-col">

        </div>
        <div className="h-[10%] bg-[#2d2d2d] flex justify-between items-center p-3 ">
            <i className='h-[50px] w-[50px] rounded-md p-3 hover:bg-[#3a3a3a]'><GrEmoji className='text-2xl'/></i>
            <i className='h-[50px] w-[50px] rounded-md p-4 hover:bg-[#3a3a3a]'><FiPaperclip className='text-lg'/></i>
            <input type="text" placeholder='Type a message' className='h-[80%] w-[80%] outline-none rounded-md p-5'/>
            <i className='h-[50px] w-[50px] rounded-md p-4 hover:bg-[#3a3a3a]'><VscMic className='text-xl'/></i>
        </div>
    </div>
  )
}
