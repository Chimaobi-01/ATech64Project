import React from 'react'
import Header from './Header'
import List from './pages/List'
import Profile from './pages/Profile'
import Menu from './pages/Menu'

import avatar2 from '../assets/Avatar2.png'

export default function FamilyList() {
    return (
        <div className='bg-stone-50 h-screen w-full relative'>
            <Header image={avatar2} />
            <div className='grid grid-cols-[24vw_auto] gap-8 bg-stone-50'>
                <div className='sticky h-max top-8 left-0 flex flex-col gap-8'>
                    <Profile image={avatar2} />
                    <Menu />
                </div>
                <List />
            </div>
        </div>
    )
}