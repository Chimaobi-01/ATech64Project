import React from 'react'


export default function Menu() {
  return (
    <div className='card-shadow p-3 bg-white rounded-b-2xl fixed flex items-center justify-around sm:pt-20 sm:flex-col bottom-0 left-3 end-3 sm:end-auto sm:rounded-none sm:left-0 sm:top-0 md:left-0 md:pt-24 md:h-full md:justify-start md:right-auto md:w-1/4  '>

      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span className='hidden md:inline'>Home</span>
      </a>
      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
        <span className='hidden md:inline'>Family group</span>
      </a>
      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
<span className='hidden md:inline'>Photos</span>
      </a>
      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>
<span className='hidden md:inline'>Documents</span>
      </a>
      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>
<span className='hidden md:inline'>Links</span>
      </a>
      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
<span className='hidden md:inline'>Members</span>
      </a>
      <a href='#' className='block md:focus:scale-[120%] md:hover:bg-stone-100 md:flex md:gap-4 md:w-full rounded-full sm:focus:bg-white sm:focus:text-slate-700 sm:hover:bg-transparent  sm:focus:scale-150 sm:p-3 sm:focus:top-auto relative focus:-top-4 hover:bg-stone-500 focus:scale-125 focus:z-10 p-2 focus:bg-slate-700 focus:text-white md:focus:w-[90%] '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<span className='hidden md:inline'>Profile</span>
      </a>

    </div>
  )
}
