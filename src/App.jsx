import React from 'react'
import Chat from './components/Chat'
import Header from './components/Header'
import List from './components/List'
import Perfil from './components/Perfil'

const App = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      {/* Header */}
        <Header />
      <main className=' h-[92vh] md:h-[95vh] grid grid-cols-8'>
      {/* Content */}
        {/* lista */}
        <List/>
        {/* Chat */}
        <Chat/>
        
        {/* Perfil */}
        <Perfil/>

        
      </main>
    </div>
  )
}

export default App