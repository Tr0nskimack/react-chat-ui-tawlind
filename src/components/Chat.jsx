import React from 'react'
import { RiAddLine } from 'react-icons/ri'

const Chat = () => {
  return (
    <section className='col-span-4 bg-[#141517] text-gray-700 p-8 relative'>
        {/* info group */}
        <div className="w-full left-0 top-0 absolute flex items-center gap-8 p-8">
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
                <img src="https://pps.whatsapp.net/v/t61.24694-24/153198243_1328776477587091_7710779332179661150_n.jpg?ccb=11-4&oh=01_AdSHDnfl-LRggQkq8KGCyv67ZmjF5ySmya-3Of8XU42T4Q&oe=640A7238" className='w-8 h-8 object-cover rounded-full' alt="" />
                <img src="https://pps.whatsapp.net/v/t61.24694-24/328176205_2413717202109408_7964070668212279767_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTp18Buye-24ZqYe2qR_WyPDix48g0CaiMf0podGoHwzw&oe=640A8DE3" className='w-8 h-8 object-cover rounded-full' alt="" />
                <img src="https://pps.whatsapp.net/v/t61.24694-24/315773776_562882912395676_1183829061557992669_n.jpg?ccb=11-4&oh=01_AdTy8NfYiYuMk-1Iwia6qxG9JXVEkc3edawHK1ZQXClELg&oe=640A76CE" className='w-8 h-8 object-cover rounded-full' alt="" />
              </div>
              <div>
                <button className='p-[10px] rounded-full bg-[#1E1F24]'>
                  <RiAddLine className='text-gray-300 '/>
                </button>
              </div>

            </div>
          </div>

        </div>
    </section>

    )
}

export default Chat