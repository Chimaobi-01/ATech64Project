import React from 'react'
import MenuItem from './MenuItem'


export default function SidebarTwo() {
  return (
    <div className='bg-white p-2 h-72 bg-white rounded-2xl'>
        <h5 className='text-black text-xl font-medium leading-tight pb-4 pt-3 ps-2'>Other families</h5>
        <div className=' flex flex-col justify-center gap-2.5'>
        <MenuItem text="Orege family"/>
        <MenuItem text="Travis family" />
        </div>
        
        
    </div>
  )
}
