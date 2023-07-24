import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import WhatsOnYourMind from '../components/WhatsOnYourMind'
import MainContent from '../components/MainContent'
import SidebarOne from '../components/SidebarOne'
import SidebarTwo from '../components/SidebarTwo'


export default function Homepage() {

  return (
    <div className='relative bg-stone-100 '>
      <Header />

      <div className='flex flex-col-reverse gap-8 sm:ps-20 md:flex-row md:ps-4 md:gap-4 md:pt-24 md:px-4' >

        <div className='md:w-3/12'>
            <Menu />
        </div>

        <div className='flex flex-col gap-8 py-8 px-3 bg-stone-100 md:w-6/12 md:py-0 '>
          <WhatsOnYourMind />
          <MainContent />
        </div>

        <div className='hidden md:flex flex-col gap-8 w-3/12'>
          <SidebarOne />
          <SidebarTwo />
        </div>

      </div>

    </div>
  )
}