import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className='Messages'>
        <FaWhatsapp className='text-5xl'/>
        <span>Web WhatsApp</span>
        <span>Send and receive messages without keeping your phone online.Use WhatsApp on more than 4 linked devices and phone at the same time.</span>
    </div>
  )
}
