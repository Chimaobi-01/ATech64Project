import React from 'react'


export default function WhatsOnYourMind() {
  return (
    <form className='bg-white p-3 rounded-2xl pl-8'>
      <input className='outline-none block w-full border-b p-2 mb-2 text-zinc-400 text-2xl font-normal leading-loose' type='text' placeholder="What's on your mind ?" />
      <div className='flex justify-between items-center'>
        <i><svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
          <path d="M15.2308 6.13636C15.2308 6.46186 15.097 6.77402 14.859 7.00418C14.621 7.23433 14.2982 7.36364 13.9615 7.36364C13.6249 7.36364 13.3021 7.23433 13.0641 7.00418C12.826 6.77402 12.6923 6.46186 12.6923 6.13636C12.6923 5.81087 12.826 5.49871 13.0641 5.26855C13.3021 5.03839 13.6249 4.90909 13.9615 4.90909C14.2982 4.90909 14.621 5.03839 14.859 5.26855C15.097 5.49871 15.2308 5.81087 15.2308 6.13636ZM22 1.63636V14.7273V16.3636C22 16.7976 21.8217 17.2138 21.5043 17.5207C21.187 17.8276 20.7565 18 20.3077 18H1.69231C1.24348 18 0.813035 17.8276 0.495665 17.5207C0.178296 17.2138 0 16.7976 0 16.3636V13.0909V1.63636C0 1.20237 0.178296 0.786157 0.495665 0.47928C0.813035 0.172402 1.24348 0 1.69231 0H20.3077C20.7565 0 21.187 0.172402 21.5043 0.47928C21.8217 0.786157 22 1.20237 22 1.63636ZM20.3077 12.7534V1.63636H1.69231V11.117L5.57404 7.36364C5.89264 7.06009 6.32196 6.88993 6.76923 6.88993C7.21651 6.88993 7.64582 7.06009 7.96442 7.36364L12.6923 11.9352L14.8817 9.81818C15.2003 9.51463 15.6296 9.34448 16.0769 9.34448C16.5242 9.34448 16.9535 9.51463 17.2721 9.81818L20.3077 12.7534Z" fill="#676767" />
        </svg></i>
        <button className='rounded-full p-2.5 text-white text-sm font-normal leading-tight bg-slate-700 border border-zinc-300 w-24 h-7 flex items-center justify-center' type='submit'>Send</button>
      </div>

    </form>
  )
}