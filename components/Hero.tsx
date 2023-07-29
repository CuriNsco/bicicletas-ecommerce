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
        <div className='flex-1 pt-36 padding-x '>
            <h1 className='title-hero'>
                Aca podes comprar tu auto
            </h1>
            <p className='hero__subtitle'>El auto que quieras, lo tenemos nosotros</p>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src={HEROBIKE} alt='bike' fill className='object-contain'/>
                </div>
                
            <div className='w-full flex items-center justify-center  mt-5'>
            <CustomButton
            title="Explore Cars"
            containerStyles = 'bg-black text-white font-bold  rounded-full mb-2'
            handleClick={handleScroll}
            />
            </div>
        </div>
    </div>
  )
}

export default Hero