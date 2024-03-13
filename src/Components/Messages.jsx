import React, { useState } from 'react'
import Chats from './Chats'
import ChatBox from './ChatBox'
import Home from './Home'

export default function Messages() {
    const [home,setHome] = useState(true)
    return (
        <div className='Messages'>
            <Chats />
            {home?<Home/>:<ChatBox setHome={setHome} />}
        </div>
    )
}
