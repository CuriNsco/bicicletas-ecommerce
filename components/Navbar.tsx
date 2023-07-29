import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { logocar } from '@/public'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                src={logocar}
                alt='Bike store logo'
                width={118}
                height={18}
                className='object-contain'
                />
            </Link>

            <CustomButton
            title='Sing in'
            btnType= 'button'
            containerStyles='text-white font-bold
            rounded-full bg-black min-w-[130px]'

            />
        </nav>

    </header>
  )
}

export default Navbar