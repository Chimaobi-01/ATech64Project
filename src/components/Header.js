import React from 'react'
import send from '../assets/Avatar1.png'


export default function Header() {
  return (
    <nav className='flex py-10 px-6 gap-6 sm:px-10 sm:ps-24 sm:gap-8 md:pr-20 md:absolute md:z-20 md:top-0 md:left-0 md:right-0 items-center h-16 bg-white border-b border-zinc-500 md:justify-around '>

      <span className='text-zinc-500 text-2xl font-bold leading-loose hidden sm:block'>Familiz</span>

      <form className='grow md:grow-0 md:w-2/4'>
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">

          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          
          <input type="search" id="search" class="block w-full p-3 ps-10 text-sm text-gray-900 rounded-full bg-stone-50 outline-stone-50" placeholder="Search" required />
        
        </div>
      </form>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 p-2 bg-stone-50 rounded-full sm:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>

      <img className='hidden sm:block' src={send} alt='avatar' />

    </nav>
  )
}