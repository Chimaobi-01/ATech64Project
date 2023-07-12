import React from 'react'



export default function Header({image}) {
  return (
    <nav className='flex justify-between items-center py-8 pl-24 pr-40 mb-10 h-16 bg-white border-b border-zinc-500 '>
      <span className='text-zinc-500 text-2xl font-bold leading-loose'>Familiz</span>
      {/* search input*/}       
<form className='basis-6/12'>   
    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-3 ps-10 text-sm text-gray-900 rounded-full bg-stone-50 outline-stone-50" placeholder="Search" required />
    </div>
</form>
 {/* search input ends*/} 
      <img className="Base w-12 h-12 rounded-3xl" src={image} alt='logo' />
    </nav>
  )
}