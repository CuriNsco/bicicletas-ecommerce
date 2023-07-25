import { BikeProps } from "@/types";

export async function fetchBikes(){
    const headers = {
		'X-RapidAPI-Key': '114fdb6628mshfb399183b823d9ap1e2551jsne17530a47cdc',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q5',{ headers: headers,});

    const result = await response.json();

    return result;
}


export const calculateBikeRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };


export const generateBikeImageUrl = (bike: BikeProps, angle? : string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  const {make, year, model} = bike;
  
  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);
  
  return `${url}`;
}