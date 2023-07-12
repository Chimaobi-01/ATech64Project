import React from 'react'


export default function Profile({image}) {
  return (
    <figure className='bg-white flex p-3 items-center gap-2 rounded-2xl'>
        <img className="Base w-12 h-12 rounded-3xl" src={image} />
        <figcaption>
            <p className='text-black text-xl font-normal leading-7'>Ebuka Johnson</p>
            <span className='text-zinc-400 text-sm font-normal leading-snug'>@ebuka_the_boss</span>
        </figcaption>
    </figure>
  )
}
