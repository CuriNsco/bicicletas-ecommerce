import { Hero, CustomFilter,Searchbar,BikeCard } from "@/components"
import { fetchBikes } from "@/utils"

export default async function Home() {

  const allBikes = await fetchBikes();
  const isDataEmpty = !Array.isArray(allBikes) || allBikes.length <1 || !allBikes;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discorver">
        <div className="home__text-container">
        <h1 className="text-4xl font-extrabold"> Bike catalogue</h1>
        <p>Explore the bikes you might like</p>
        </div>
        <div className="home__filters">
          <Searchbar/>
          <div className="home__filter-container">
            {/* <CustomFilter title='road'/>
            <CustomFilter title='year'/> */}

          </div>
        </div>


            {!isDataEmpty ? (
              <section>
                <div className="home__cars-wrapper">

                  {allBikes?.map((bike) => (
                    <BikeCard bike={bike}/>
                  ))}

                </div>
              </section>
            ): (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">no hubo resultados</h2>
                <p>{allBikes?.message}</p>
              </div>
            )}
      
      </div>
    </main>
  )
}
