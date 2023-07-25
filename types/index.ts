import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyle?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }
export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface BikeProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}