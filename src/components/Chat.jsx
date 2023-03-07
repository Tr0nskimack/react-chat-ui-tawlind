import React from 'react'
import { RiAddLine, RiImageAddLine,RiEmotionHappyLine, RiMapPinLine   } from 'react-icons/ri'
import { BiMicrophone, BiRightTopArrowCircle,BiDotsVerticalRounded } from "react-icons/bi";

const Chat = () => {
  return (
    <section className='col-span-4 bg-[#141517] text-gray-700 p-8 relative'>
        {/* info group */}
        <div className="w-full left-0 top-0 absolute flex items-center gap-8 p-8 border-b border-gray-800">
          <div className=''>
            <img src="https://pps.whatsapp.net/v/t61.24694-24/153198243_1328776477587091_7710779332179661150_n.jpg?ccb=11-4&oh=01_AdSHDnfl-LRggQkq8KGCyv67ZmjF5ySmya-3Of8XU42T4Q&oe=640A7238" className='w-20 h-20 object-cover rounded-full' alt="" />
          </div>
          <div className=' flex-1 flex justify-between items-center'>
            <div>
              <h1 className='text-3xl text-gray-300'>Design Team</h1>
              <p className='text-gray-500'>60 miembros, 10 en linea</p>
            </div>
            {/*Users  */}
            <div className='flex items-center gap-4'>
              <div className='flex items-start'>
                <img src="https://pps.whatsapp.net/v/t61.24694-24/153198243_1328776477587091_7710779332179661150_n.jpg?ccb=11-4&oh=01_AdSHDnfl-LRggQkq8KGCyv67ZmjF5ySmya-3Of8XU42T4Q&oe=640A7238" className='w-8 h-8 object-cover rounded-full '  />
                <img src="https://pps.whatsapp.net/v/t61.24694-24/328176205_2413717202109408_7964070668212279767_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTp18Buye-24ZqYe2qR_WyPDix48g0CaiMf0podGoHwzw&oe=640A8DE3" className='w-8 h-8 object-cover rounded-full '  />
                <img src="https://pps.whatsapp.net/v/t61.24694-24/315773776_562882912395676_1183829061557992669_n.jpg?ccb=11-4&oh=01_AdTy8NfYiYuMk-1Iwia6qxG9JXVEkc3edawHK1ZQXClELg&oe=640A76CE" className='w-8 h-8 object-cover rounded-full '  />
              </div>
              <div>
                <button className='p-[10px] rounded-full bg-[#1E1F24]'>
                  <RiAddLine className='text-gray-300 '/>
                </button>
              </div>

            </div>
          </div>

        </div>
        {/* Message */}
        <div className="absolute bg-[#292933] left-0 bottom-0 w-full p-8 ">
          <form className='relative'>
            <input type="text" className='outline-none w-full py-2 pl-10 pr-[116px] rounded-full bg-[#1e1f24] text-gray-300 ' />
            <BiMicrophone className='absolute text-gray-200 top-[11px] left-4 text-xl'/>
            {/* Iconos en input */}
            <div className='text-gray-300 flex gap-2 absolute top-[11px] items-center right-4'>
              <RiImageAddLine className='hover:cursor-pointer'/>
              <RiEmotionHappyLine className='hover:cursor-pointer'/>
              <BiRightTopArrowCircle className='hover:cursor-pointer'/>
              <RiMapPinLine className='hover:cursor-pointer'/>

            </div>

          </form>
        </div>
        {/* Content Message */}
        <div className=' mt-32 overflow-y-scroll max-h-[calc(100%-190px)] bg-red-500'>
          <div className="flex gap-4">
            <img src="/imagenes/chat.jpg" className='w-10 h-10 object-cover rounded-full'/>
            <div>
            <h4 className='text-gray-300 font-semibold mb-2'>Asha team 
              <span className='text-gray-500 font-normal text-sm ml-8'>10:12</span>
            </h4>
            <div className='flex items-center gap-2 mb-2'>
              <p className="text-sm bg-[#1e1f24] py-2 px-4 text-gray-500 rounded-r-lg rounded-bl-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nobis?</p>
              <button>
                <BiDotsVerticalRounded className="text-gray-400"/>
              </button>
            </div>
            <div className='flex items-center gap-2 mb-2'>
              <p className="text-sm bg-[#1e1f24] py-2 px-4 text-gray-500 rounded-r-lg rounded-bl-lg">Would love to see some Design 😂</p>
              <button>
                <BiDotsVerticalRounded className="text-gray-400"/>
              </button>
            </div>
            
            </div>
          </div>
          {/* Diviver */}
          <div className='my-8 relative'> 
            <p className=' text-sm text-gray-600 absolute -top-[14px] ml-[50%] -traslate-w-[50%] py-1 px-4'>Today, March 24</p>
            <hr className='border-gray-600 '/>
          </div>

          <div className="flex gap-4">
            <img src="https://img.freepik.com/foto-gratis/retrato-joven-atractivo-vestido-informalmente-usando-tableta-sonriendo-fondo-blanco_662251-2948.jpg" className='w-10 h-10 object-cover rounded-full'/>
            <div>
              <h4 className='text-gray-300 font-semibold mb-2'>Carlos Brito 
                <span className='text-gray-500 font-normal text-sm ml-8'>10:32</span>
              </h4>
              <div className='flex items-center gap-2 mb-2'>
                <p className="text-sm bg-[#1e1f24] py-2 px-4 text-gray-500 rounded-r-lg rounded-bl-lg">ey, happy to hearn from you?, Yes, I will be back in a couple to days</p>
                <button>
                  <BiDotsVerticalRounded className="text-gray-400"/>
                </button>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <p className="text-sm bg-[#1e1f24] py-2 px-4 text-gray-500 rounded-r-lg rounded-bl-lg">Would love to see some Design 😂</p>
                <button>
                  <BiDotsVerticalRounded className="text-gray-400"/>
                </button>
              </div>

              <div className='flex items-center gap-2 mb-2'>
                <img src="https://images.pexels.com/photos/13646290/pexels-photo-13646290.jpeg" className='w-[110px] Sobre lo sucedido ayer0px] rounded-lg shadow-lg object-cover cursor-pointer' />
                <img src="https://images.pexels.com/photos/9921261/pexels-photo-9921261.jpeg" className='w-[110px] rounded-lg shadow-lg object-cover cursor-pointer' />
                <button>
                  <BiDotsVerticalRounded className="text-gray-400"/>
                </button>
              </div>
            </div>

          </div>
          {/* Respond */}
          <div className=" flex justify-end gap-4 my-4">
            <img src="https://img.freepik.com/foto-gratis/retrato-joven-atractivo-vestido-informalmente-usando-tableta-sonriendo-fondo-blanco_662251-2948.jpg" className='w-10 h-10 object-cover rounded-full order-1'/>
            <div>
              <h4 className='text-gray-300 font-semibold mb-2 text-right'>Carlos Brito 
                <span className='text-gray-500 font-normal text-sm ml-8'>10:32</span>
              </h4>
              
              <div className='flex items-center justify-end gap-2 mb-2'>
                <p className="text-sm bg-[#5150fd] py-2 px-4 text-gray-200 rounded-l-lg rounded-br-lg order-1">Would love to see some Design 😂</p>
                <button>
                  <BiDotsVerticalRounded className="text-gray-400"/>
                </button>
              </div>

             
            </div>
            
          </div>

          <div className="flex gap-4">
            <img src="https://img.freepik.com/foto-gratis/retrato-joven-atractivo-vestido-informalmente-usando-tableta-sonriendo-fondo-blanco_662251-2948.jpg" className='w-10 h-10 object-cover rounded-full'/>
            <div>
              <h4 className='text-gray-300 font-semibold mb-2'>Carlos Brito 
                <span className='text-gray-500 font-normal text-sm ml-8'>10:32</span>
              </h4>
              <div className='flex items-center gap-2 mb-2'>
                <p className="text-sm bg-[#1e1f24] py-2 px-4 text-gray-500 rounded-r-lg rounded-bl-lg">ey, happy to hearn from you?, Yes, I will be back in a couple to days</p>
                <button>
                  <BiDotsVerticalRounded className="text-gray-400"/>
                </button>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <p className="text-sm bg-[#1e1f24] py-2 px-4 text-gray-500 rounded-r-lg rounded-bl-lg">Would love to see some Design 😂</p>
                <button>
                  <BiDotsVerticalRounded className="text-gray-400"/>
                </button>
              </div>

              
            </div>
          </div>
        </div>
    </section>
    

    )
  }
    
  export default Chat