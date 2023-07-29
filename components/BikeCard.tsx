'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BikeProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateBikeRent, generateBikeImageUrl } from '@/utils'
import { HEROBIKE, rightarrow } from '@/public'
import BikeDetails from './BikeDetails'

interface BikeCardProps {
    bike: BikeProps;
}

const BikeCard = ({ bike }: BikeCardProps) => {

    const {city_mpg, year, make, model, transmission, drive } = bike;
    const bikeRent = calculateBikeRent(city_mpg, year);

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='card group'>
        <div className='car-card__content'>
            <h2 className='titulo-card'>
                {make} {model}
            </h2>

        </div>
        <div className='relative w-full h-40 mt-12 object-contain'>
            <Image src={generateBikeImageUrl(bike)} alt='producto' fill priority
            className='object-contain'/>
        </div>

        <p className='precio-auto'>
            <span className='self-start text-[30px] font-extrabold'>
               $
            </span>
             {bikeRent}
        </p>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='steering-wheel.svg' alt='wheel' width={20} height={20}/>
                    <p className='text-[14px] font-extrabold'>
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='tire.svg' alt='wheel' width={20} height={20}/>
                    <p className='text-[14px] font-extrabold'>
                       {drive.toUpperCase()}
                    </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src='gas.svg' alt='wheel' width={20} height={20}/>
                    <p className='text-[14px] font-extrabold'>
                        {city_mpg} MPG
                    </p>
                </div>
            </div>
            <div className='car-card__btn-container'>
                <CustomButton
                title='View More'
                containerStyles='w-full py-[16px] rounded-full bg-black'
                textStyle='text-white text-[14px] leading-[18px] font-bold'
                rightIcon={rightarrow}
                handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
        <BikeDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} bike={bike}/>
    </div>
  )
}

export default BikeCard