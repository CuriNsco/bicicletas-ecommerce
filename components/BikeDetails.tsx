'use client';
import { BikeProps } from '@/types';
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog} from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { close,HEROBIKE } from '@/public';
import { generateBikeImageUrl } from '@/utils';

interface BikeDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    bike: BikeProps;
}

const BikeDetails = ({isOpen, closeModal, bike} : BikeDetailsProps) => {
  return (
    
     <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child 
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25'/>
                </Transition.Child>
                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child 
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0'
                >
                    <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-4 rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5'>
                        <button
                        type='button'
                        onClick={closeModal}
                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
                            <Image
                            src={close}
                            alt='close'
                            width={20}
                            height={20}
                            className='object-contain'
                            />
                        </button>
                        <div className='flex-1 flex flex-col gap-3'>
                            <div className='relative w-full h-[272px] bg-red-500 bg-cover bg-center rounded-lg scrollbar-w-12'>
                            <Image src={generateBikeImageUrl(bike)}alt='producto' fill priority className='object-contain mt-2 '/>
                            </div>
                            <div className='flex gap-3'>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateBikeImageUrl(bike,'29')}alt='producto' fill priority className='object-contain'/>
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateBikeImageUrl(bike,'22')}alt='producto' fill priority className='object-contain'/>
                                </div>
                                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                <Image src={generateBikeImageUrl(bike,'13')}alt='producto' fill priority className='object-contain'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <h2 className='font-semibold text-xl capitalize'>
                                {bike.make} {bike.model}
                            </h2>
                            <div className='flex flex-wrap mt-3 gap-4'>
                                {Object.entries(bike).map (([key, value]) => (
                                    <div className='flex justify-between gap-5 w-full text-right' key={key}>
                                        <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                                        <p  className='font-semibold text-black-100'>{value}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </Dialog.Panel>

                </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
     </>
  )
}

export default BikeDetails