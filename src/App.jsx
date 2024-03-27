import React from 'react'
import Background from './component/Background'
import Foreground from './component/Foreground'

export default function App() {
  return (
    <div className='relative w-full h-screen bg-white'>
      <Background/>
      <Foreground/>
      
    </div>
  )
}
