import React from 'react'
import { RiSearchLine, RiCheckboxBlankCircleFill  } from "react-icons/ri"; 

const List = () => {
  return (
    <section className='col-span-2 bg-[#22222A]  p-8'>
      <div>
        <h1 className='text-3xl text-white mb-4'>Mensajes</h1>
        <form className='hidden md:block mb-6'>
          <div className='relative'>
              <input type="text" className='bg-[#050505] w-full outline-none py-2 px-4 pl-6 pr-4 rounded-lg text-gray-400 ' placeholder='Buscar...' />
              <RiSearchLine className='absolute left-1 top-3 text-gray-400'/>
          </div>
        </form>
      </div>
      {/* users */}
        <div className='flex items-center gap-2  w-ful '>
          <div className='relative'>
            <img src="/imagenes/chat.jpg" className='w-9 h-9 object-cover rounded-full ring-2 ring-white' alt="" />
            <RiCheckboxBlankCircleFill className='text-green-500 absolute right-0 -bottom-[6px] text-xs ring-[1px] ring-white rounded-full'/>
          </div>
          <div className='flex items-center w-full justify-between'>
            <p className='text-gray-200'>Jose Marcano</p>
            <p className='text-gray-200'>Hora</p>

          </div>
        </div>
    </section>
  )
}

export default List