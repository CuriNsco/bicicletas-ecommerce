'use client'

import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import { HEROBIKE } from '@/public'

const Hero = () => {

    const handleScroll = ()=> {

    }
    
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, book, or rent a car - quickly and easily
            </h1>
            <p className='hero__subtitle'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsam veritatis error tempore accusantium, corporis eius nobis ipsum debitis necessitatibus soluta. Nulla ipsam placeat mollitia illo ipsa culpa id ea.</p>
            
            <CustomButton
            title="Explore Bikes"
            containerStyles = 'bg-primary-blue text-white rounded-full mt-10'
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src={HEROBIKE} alt='bike' fill className='object-contain'/>
                </div>
                <div className='hero__image-overlay'></div>
            
        </div>
    </div>
  )
}

export default Hero