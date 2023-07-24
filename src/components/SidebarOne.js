import React from 'react'


export default function SidebarOne() {
  return (
    <div className='bg-white p-4 rounded-xl card-shadow '>
        <h5 className='text-black text-xl font-medium leading-tight pb-8'>Post categories</h5>
        <div className='flex flex-wrap gap-x-2 gap-y-3 '>
            <span className=' rounded-full px-6 bg-white rounded-2xl border border-black '>Marriage</span>
            <span className=' rounded-full px-6 bg-white rounded-2xl border border-black '>Funeral</span>
            <span className='rounded-full px-6 bg-white rounded-2xl border border-black '>Babies</span>
            <span className=' rounded-full px-6 bg-white rounded-2xl border border-black '>Birthday</span>
            <span className=' rounded-full px-6 bg-white rounded-2xl border border-black '>Marriage</span>
            <span className=' rounded-full px-6 bg-white rounded-2xl border border-black '>Funeral</span>
            <span className='  rounded-full px-6 bg-white rounded-2xl border border-black '>Babies</span>
            <span className=' rounded-full px-6 bg-white rounded-2xl border border-black '>Birthday</span>
          
        </div>
    </div>
  )
}
