import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard.jsx";
import Map from "../components/Map.jsx";

function Search({ searchResults }: any) {
  const router = useRouter();

  const { location, startDate={undefined}, endDate, numOfGuests } = router.query;

  /* const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedendDate = format(new Date(endDate), "dd MMMM yy"); */
  /* const range = `${formattedStartDate} - ${formattedendDate}`; */
/* dodadi ${range} kade pisuva your time  i kade pisuva your time range na 26 linija*/

  return (
    <div>
      <Header placeholder={`${location} | your time | ${numOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays from your time range for {numOfGuests} number of Guests
          </p>
          <h1 className="text-xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item: any) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults = {searchResults}/>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
