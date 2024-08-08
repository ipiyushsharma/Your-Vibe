import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Displays from './Components/Displays'
const App = () => {


  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
      <Sidebar />
      <Displays/>
      </div> 
      <Player/>
      <audio preload='auto'></audio>
    </div>
  )
}

export default App
