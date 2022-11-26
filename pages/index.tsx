import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import SmallCard from "../components/SmallCard.jsx";
import BigCards from "../components/BigCards.jsx";
import LargeCard from "../components/LargeCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Home({ exploreData, cardsData }: any) {
  return (
    <div className="">
      <Head>
        <title>Cvetan Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header placeholder={''}/>
      <Banner />

      <main className="max-w-7xl mx-auto px-6 sm:p-8">
        {/* small cards */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        {/* Big Cards */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item: any) => (
              <BigCards key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        {/* Large Card */}
        <section>
          <LargeCard
            img={"https://links.papareact.com/4cj"}
            title="The Greatest Outdoors"
            description={"Whislist curated by Airbnb"}
            buttonText={"Get Inspired"}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
