import React from 'react'
import MenuItem from './MenuItem'


export default function Menu() {
  return (
    <div className=' bg-white p-2.5 rounded-2xl flex flex-col justify-center gap-2.5'>
        <MenuItem text="Home" />
        <MenuItem text="Family tree" />
        <MenuItem text="Photos" />
        <MenuItem text="Documents" />
        <MenuItem text="Links" />
        <MenuItem text="Members" />
        <MenuItem text="Profile" />
    </div>
  )
}
