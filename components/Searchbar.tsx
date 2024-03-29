'use client'
import React from "react";
import { useState} from "react";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { magnifyglass, modelincon } from "@/public";

const SearchButton = ({otherClasses} : {otherClasses : string}) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src={magnifyglass}
    alt="a"
    width={40}
    height={40}
    className="object-contain"
    />
  </button>
)

const Searchbar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent <HTMLFormElement>) => {
      e.preventDefault();

      if(manufacturer === '' && model === '') {
        return alert('Por favor escribi en la search bar')
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer : string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model){
        searchParams.set('model', model)
      }else {
        searchParams.delete('model')
      }
      if(manufacturer){
        searchParams.set('manufacturer', manufacturer)
      }else {
        searchParams.delete('manufacturer')
      }

      const newPathname = `${window.location.pathname} ? ${searchParams.toString()}`

     router.push(newPathname)
    }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item xl:mr-12 ">
            <SearchManufacturer
            manufacturer = {manufacturer}
            setManuFacturer = {setManufacturer}
            />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className="searchbar__item">
            <Image
            src={modelincon}
            alt="modelincon"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"/>

            <input type="text" 
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Astra"
            className="searchbar__input"/>
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default Searchbar