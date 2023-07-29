import { Hero, CustomFilter,Searchbar,BikeCard, ShowMore } from "@/components"
import { fetchBikes } from "@/utils"
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {

  const allBikes = await fetchBikes({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit  || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allBikes) || allBikes.length <1 || !allBikes;


  return (
    <div className="overflow-hidden bg-[#ffffff] px-20">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discorver">
        <div className="subtitle__text-container">
        <h1 className="text-5xl font-extrabold"> Cars catalogue</h1>
        </div>
        <div className="filtros-autos">
          <Searchbar/>
          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>
        </div>


            {!isDataEmpty ? (
              <section>
                <div className="div-container-cards">

                  {allBikes?.map((bike) => (
                    <BikeCard bike={bike}/>
                  ))}

                </div>

                <ShowMore 
                pageNumber={(searchParams.limit || 10)/ 10}
                isNext={(searchParams.limit || 10)> allBikes.length}/>

              </section>
            ): (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">no hubo resultados</h2>
                <p>{allBikes?.message}</p>
              </div>
            )}
      </div>
  )
}
