import { BikeProps, FiltroProps} from "@/types";

export async function fetchBikes(filtro: FiltroProps) {
  const {manufacturer, year, model, limit, fuel } = filtro;
    const headers = {
		'X-RapidAPI-Key': '114fdb6628mshfb399183b823d9ap1e2551jsne17530a47cdc',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
    const result = await response.json();

    return result;
}


export const calculateBikeRent = (city_mpg: number, year: number) => {
    const basePriceCar = 15000;
    return basePriceCar.toFixed(0);
  };

  export const updateSearchParams = (type: string, value: string) => {

    const searchParams = new URLSearchParams(window.location.search);
  
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    return newPathname;
  };

  export const deleteSearchParams = (type: string) => {

    const newSearchParams = new URLSearchParams(window.location.search);
  
    newSearchParams.delete(type.toLocaleLowerCase());
  
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
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