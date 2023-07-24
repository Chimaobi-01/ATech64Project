import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Profile from '../components/Profile'
import Menu from '../components/Menu'

import avatar2 from '../assets/Avatar2.png'


export default function FamilyForm() {
    return (
        <div className='bg-stone-50 h-screen w-full relative'>
            <Header image={avatar2} />
            <div className='grid grid-cols-[24vw_auto] gap-8 bg-stone-50'>
                <div className='sticky h-max top-8 left-0 flex flex-col gap-8'>
                    <Profile image={avatar2} />
                    <Menu />
                </div>
                <Form />
            </div>
        </div>
    )
}