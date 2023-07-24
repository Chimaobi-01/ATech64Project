import React from 'react'
import like from '../assets/like.png'
import send from '../assets/image1.png'

export default function Tweet({ image, image1 }) {
  return (
    <div className='card-shadow flex flex-col px-8 py-4 mb-8 bg-white rounded-2xl'>
      
      <div className='flex justify-between items-center px-1 '>
        <div className='flex gap-2 items-center'>
          <img className=" w-10 h-10 rounded-full" src={image} alt='user' />
          <div>
            <p className='text-gray-900 text-sm font-medium leading-tight'>Lana Steiner</p>
            <span className='w-10 h-5 text-gray-500 text-sm font-normal leading-tight'>@lana</span>
          </div>
        </div>
        <span className='w-32 h-5 text-gray-500 text-xs font-normal leading-tight'>1h ago - Lagos, Nigeria</span>
      </div>

      <figure>
        <i className='block  items-center justify-center flex'><svg xmlns="http://www.w3.org/2000/svg" width="578" height="386" viewBox="0 0 578 386" fill="none">
          <path d="M400.154 131.861C400.154 138.83 396.641 145.514 390.387 150.442C384.133 155.37 375.652 158.139 366.808 158.139C357.964 158.139 349.482 155.37 343.228 150.442C336.975 145.514 333.462 138.83 333.462 131.861C333.462 124.892 336.975 118.208 343.228 113.28C349.482 108.353 357.964 105.584 366.808 105.584C375.652 105.584 384.133 108.353 390.387 113.28C396.641 118.208 400.154 124.892 400.154 131.861ZM578 35.5113V315.802V350.839C578 360.131 573.316 369.042 564.978 375.613C556.639 382.184 545.33 385.875 533.538 385.875H44.4615C32.6696 385.875 21.3606 382.184 13.0225 375.613C4.68433 369.042 0 360.131 0 350.839V280.766V35.5113C0 26.2191 4.68433 17.3075 13.0225 10.7369C21.3606 4.16629 32.6696 0.474976 44.4615 0.474976H533.538C545.33 0.474976 556.639 4.16629 564.978 10.7369C573.316 17.3075 578 26.2191 578 35.5113ZM533.538 273.54V35.5113H44.4615V238.503L146.445 158.139C154.816 151.639 166.095 147.996 177.846 147.996C189.597 147.996 200.877 151.639 209.247 158.139L333.462 256.021L390.984 210.693C399.354 204.194 410.633 200.551 422.385 200.551C434.136 200.551 445.415 204.194 453.786 210.693L533.538 273.54Z" fill="#676767" />
        </svg></i>
        <figcaption className='flex justify-between items-center border-b pb-2 px-1.5  text-gray-900 text-base font-medium leading-tight'>
          <span className='inline-flex gap-2 items-end justify-center '>
            <img src={like} />
            <span >. 10 Likes</span>
          </span>
          <span >3 comments</span>
        </figcaption>
      </figure>

      <div className='comment flex gap-2 my-2'>
        <img className="Base w-10 h-10 rounded-full" src={image1} />
        <div className='bg-stone-50 rounded-2xl p-3'>
          <span className=' text-gray-900 text-sm font-medium leading-tight ps-1'>Oliva Rhye</span>
          <p className='text-stone-500 text-sm font-medium leading-tight h-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>

      <form className='flex items-center justify-around'>
        <input className='basis-[90%] bg-stone-50 text-gray-900 text-sm rounded-full p-2.5 outline-stone-50 ps-5' type='text' placeholder='Say something...' />
        <button type='submit'><img src={send} /></button>
      </form>

    </div>
  )
}
