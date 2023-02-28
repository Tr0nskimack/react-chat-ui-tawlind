import React, { useState } from 'react'
import Chat from './components/Chat'
import Header from './components/Header'
import List from './components/List'
import Perfil from './components/Perfil'
import { RiMenu3Line} from "react-icons/ri"; 



const App = () => {
  const [showMenu, setShowmenu] = useState(false)
  
  const toggleMenu = () => {
    setShowmenu(!showMenu)
    
  
  }
  return (
    <div className=" min-h-screen flex flex-col">
      {/* Menu Movil */}
      <button onClick={toggleMenu} className='fixed bottom-4 right-4 bg-[#22222A] text-white p-3 rounded-full '>
        <RiMenu3Line/>
      </button>
      {/* componente Header */}
        <Header/>
      {/* componente Lista de ususarios  */}
      <main className=' h-[92vh] md:h-[95vh] grid grid-cols-1 lg:grid-cols-8'>
       <List showMenu={showMenu}  setShowmenu={setShowmenu}/>
       <Chat/>
       <Perfil/>



      </main>
    </div>
  )
}

export default App