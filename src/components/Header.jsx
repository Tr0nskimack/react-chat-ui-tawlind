import React from 'react'
import { RiSearchLine, RiNotification3Line, RiArrowDownSLine } from "react-icons/ri"; 

const Header = (props) => {
    const {imagen} = props
  return (
    <header className="w-full h-[8vh] md:h-[5vh] flex justify-between items-center px-8 bg-[#1E1F24]">
        <div>
            <a href="http://"><img className='w-7 h-7 object-cover' src="/imagenes/logo2.png" alt="" /></a>
        </div>
        <form className='hidden md:block '>
            <div className='relative'>
                <input type="text" className='bg-[#050505] outline-none py-1 px-4 pl-6 pr-4 rounded-lg text-gray-400 ' placeholder='Buscar...' />
                <RiSearchLine className='absolute left-1 top-2 text-gray-400'/>
            </div>
        </form>
        {/* Notifications */}
        <div className='flex justify-center gap-5'>
            <div className='relative'>
                <RiNotification3Line className='text-xl text-gray-400'/>
                <span className='absolute left-3 -top-2 text-white text-[8px] py-[1px] px-[5px] rounded-full bg-purple-600'>2</span>
            </div>
            {/* User */}
            <div className='flex items-center gap-2'>
                <img src="/imagenes/60111.jpg" className='w-6 h-6 rounded-full ring-2 ring-white object-cover' alt="" />
                <RiArrowDownSLine className="text-gray-300 "/>
            </div>
        </div>
    </header>
   
    
  )
}

export default Header