import React from 'react'
import Header from './Header'
import Profile from './pages/Profile'
import Menu from './pages/Menu'
import WhatsOnYourMind from './pages/WhatsOnYourMind'
import MainContent from './pages/MainContent'
import SidebarOne from './pages/SidebarOne'
import SidebarTwo from './pages/SidebarTwo'


import avatar2 from '../assets/Avatar2.png'


export default function Homepage() {
  return (
    <div className='bg-stone-50 h-screen w-full relative'>
      <Header image={avatar2} />
      <div className='gridLayout bg-stone-50'>
        <div className='sticky h-max top-8 left-0 flex flex-col gap-8'>
          <Profile image={avatar2} />
          <Menu />
        </div>
        <div className=' flex flex-col gap-8'>
          <WhatsOnYourMind />
          <MainContent />
        </div>
        <div className=' flex flex-col gap-8'>
          <SidebarOne />
          <SidebarTwo />
        </div>
      </div>
    </div>
  )
}