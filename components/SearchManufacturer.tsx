'use client'
import { SearchManuFacturerProps } from '@/types';
import { useState, Fragment} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import {manufacturers} from '@/constants';
import { carlogo } from '@/public'
import Image from 'next/image'
const SearchManufacturer = ({manufacturer, setManuFacturer} : SearchManuFacturerProps) => {
    const [query, setQuery] = useState('');


    const filtroManufacturers = query === '' 
     ? manufacturers :
     manufacturers.filter((item) => (
        item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase() .replace(/\s+/g, '')
        )))

  return (
    <div className='search-manufacturer'>
        <Combobox value={manufacturer} onChange={setManuFacturer}>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                    <Image
                    src={carlogo}
                    width={22}
                    height={22}
                    className='ml-4'
                    alt='car-logo'/>
                </Combobox.Button>
                <Combobox.Input className='search-manufacturer__input'
                placeholder='VolksWagen'
                displayValue={(manufacturer: string) => manufacturer}
                onChange={(e) => setQuery (e.target.value)}/>
                
                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterEnter={()=> setQuery('')}
                >
                    <Combobox.Options>
                        {filtroManufacturers.map((item) => (
                                <Combobox.Option
                                key={item}
                                value={item}
                                className={({active}) => `
                                relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>

                                    {({selected, active}) => (
                                        <>
                                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                                        </>
                                                        )}
                                </Combobox.Option>
                            )
                            )}
                    </Combobox.Options>

                </Transition>
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer