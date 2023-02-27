import React, {useState} from 'react'
import { RiSearchLine, RiCheckboxBlankCircleFill, RiCheckDoubleLine, RiMessage2Line  } from "react-icons/ri"; 


const List = (props) => {

  const {showMenu, setShowmenu} = props

  
  return (
    <section className={`col-span-2 bg-[#22222A] p-8 overflow-y-scroll fixed lg:static  transition-all ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <h1 className='text-3xl text-white mb-4'>Mensajes</h1>
        <form className='hidden md:block mb-6'>
          <div className='relative'>
              <input type="text" className='bg-[#050505] w-full outline-none py-2 px-4 pl-6 pr-4 rounded-lg text-gray-400 ' placeholder='Buscar...' />
              <RiSearchLine className='absolute left-1 top-3 text-gray-400'/>
          </div>
        </form>
      </div>
      {/* LIST users */}
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="/imagenes/chat.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Jose Marcano</h3>
            <p className='text-green-300'>Escribiendo...</p>
          </div>
          <div>
            <h3 className='text-gray-500'>4:30 PM</h3>
            <span className='bg-red-600 text-[9px] text-white rounded-full px-[5px] py-[1px] float-right'>2</span>
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="https://img.freepik.com/foto-gratis/retrato-joven-atractivo-vestido-informalmente-usando-tableta-sonriendo-fondo-blanco_662251-2948.jpg?" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Carlos Brito</h3>
            <p className='text-gray-500'>puede ser...</p>
          </div>
          <div>
            <h3 className='text-gray-500'>4:30 PM</h3>
            <RiCheckDoubleLine className='text-green-300 text-xl float-right'/>
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="https://img.freepik.com/foto-gratis/mujer-celebrando-ser-ganador_155003-38247.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Evelyn Delgado</h3>
            <p className='text-gray-500'>Hola a a todos...</p>
          </div>
          <div>
            <h3 className='text-gray-500'>4:30 PM</h3>
            <RiCheckDoubleLine className='text-green-300 text-xl float-right'/>
          </div>
        </div>
      </a>
      {/* All messajes */}
      <h5 className='text-gray-300 flex items-center gap-2 mb-3'><RiMessage2Line/>All messages</h5>
      {/* all chats */}
      <a href="#" className='flex w-full gap-2 my-4 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="/imagenes/chat.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Jose Marcano</h3>
            <p className='text-green-300'>Escribiendo...</p>
          </div>
          <div>
            <h3 className='text-gray-500'>4:30 PM</h3>
            
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="https://img.freepik.com/psd-premium/hombre-guapo-laptop_1368-20364.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Miguel gonzalez</h3>
            <p className='text-gray-500'></p>
          </div>
          <div>
            <h3 className='text-gray-500'>4:30 PM</h3>
            <span className='bg-red-600 text-[9px] text-white rounded-full px-[5px] py-[1px] float-right'>1</span>
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="https://img.freepik.com/foto-gratis/amigable-sonriente-feliz-nina-asiatica-da-consejos-sobre-donde-encontrar-lo-que-necesita-senalando-dedo-izquierda-sonriendo-despreocupadamente-recomendando-publicidad-promocionando-productos-discutiendo-nueva-tienda-pared-blanca_176420-37167.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Luisa Jimenez</h3>
            <p className='text-gray-500'></p>
          </div>
          <div>
            <h3 className='text-gray-500'>Yesterday</h3>
            <span className='bg-red-600 text-[9px] text-white rounded-full px-[5px] py-[1px] float-right'>2</span>
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="/imagenes/chat.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Carmen Barazarte</h3>
          </div>
          <div>
            <h3 className='text-gray-500'>Yesterday</h3>
            <RiCheckDoubleLine className='text-green-300 text-xl float-right'/>
            
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="https://img.freepik.com/foto-gratis/amigable-sonriente-feliz-nina-asiatica-da-consejos-sobre-donde-encontrar-lo-que-necesita-senalando-dedo-izquierda-sonriendo-despreocupadamente-recomendando-publicidad-promocionando-productos-discutiendo-nueva-tienda-pared-blanca_176420-37167.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Luisa Jimenez</h3>
            <p className='text-gray-500'></p>
          </div>
          <div>
            <h3 className='text-gray-500'>Yesterday</h3>
            <span className='bg-red-600 text-[9px] text-white rounded-full px-[5px] py-[1px] float-right'>2</span>
          </div>
        </div>
      </a>
      <a href="#" className='flex w-full gap-2 mb-8'>
        <div className='w-[15%] relative flex items-center justify-center '>
          <img src="/imagenes/chat.jpg" className='w-10 h-10 object-cover rounded-full'/>
          <RiCheckboxBlankCircleFill className='text-green-500 text-xs absolute right-1 bottom-0 ring-2 ring-white rounded-full '/>
        </div>
        {/* Nombre y hora */}
        <div className='w-[85%] flex justify-between'>
          <div>
            <h3 className='text-gray-300 font-semibold'>Carmen Barazarte</h3>
          </div>
          <div>
            <h3 className='text-gray-500'>Yesterday</h3>
            <RiCheckDoubleLine className='text-green-300 text-xl float-right'/>
            
          </div>
        </div>
      </a>
      
      
        
    </section>
  )
}

export default List