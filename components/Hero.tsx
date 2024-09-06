import React from 'react'
import { Spotlight } from './ui/Sportlight'

function Hero() {
  return (
      <div className='pt-30 pb-20'>
          <div>
              <Spotlight className='h-screen -top-40 -left-10' fill='white' />
              <Spotlight className='h-[60vh] w-[50vw] top-20 left-70' fill='red' />
              <Spotlight className='h-[30vh] top-10' fill='blue' />
          </div>
    </div>
  )
}

export default Hero