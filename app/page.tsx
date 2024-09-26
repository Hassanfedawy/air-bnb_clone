import Banner from "./Components/Banner";
import Data from'./data.json'
import mediumCardData from'./mediumcard.json'
import SmallCard from "./Components/SmallCard";
import MediumCard from "./Components/MediumCard";
import LargeCard from "./Components/LargeCard";
export default function Home() {


  return (
   <>
    <Banner/>
    <main className=" sm:px-16"> 

      <section className="py-6">
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
     <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Data.map((item, i)=>(
        <SmallCard data={item} key={item.location}/>
      ))}
     </div>

      </section>

        <section>
          <h3 className="text-4xl font-semibold pb-4">Live Anywhere</h3>
          <div className="flex overflow-scroll space-x-4 scrollbar-hide">
          {mediumCardData.map((item,i)=>(
          <MediumCard data={item} key={i}/>

          ))}
          </div >
        </section>

        <LargeCard img="https://links.papareact.com/4cj"
                    title="The Greatest Outdoors"
                    description="Whishlists created by Airbnb"
                    ButtonText="Get Inspired"/>


                    
    </main>
   </>

  );
}


