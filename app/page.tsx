import { Hero, CustomFilter,Searchbar } from "@/components"

export default function Home() {
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
            <CustomFilter title='road'/>
            <CustomFilter title='year'/>

          </div>
        </div>
      </div>
    </main>
  )
}
