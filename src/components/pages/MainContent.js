import React from 'react'
import Tweet from './Tweet'
import avatar from '../../assets/Avatar.png'
import avatar1 from '../../assets/Avatar1.png'


export default function MainContent() {
  return (
    <div className=''>
      <Tweet image={avatar} image1={avatar1}   />
      <Tweet image={avatar} image1={avatar1} />
      <Tweet image={avatar} image1={avatar1} />
    </div>
  )
}
