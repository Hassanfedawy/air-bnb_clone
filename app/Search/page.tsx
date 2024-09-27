"use client"
import { useSelector } from "react-redux"
import { RootState } from "../Redux/Store"


function Page() {

  const {location} = useSelector((state: RootState) => state.guests);


  return (
    <div>
      <main className='flex'>
        <section className='pt-14 px-6'>
          <p className='text-xs'>300+ Stays for 5 guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
          

          <div className='hidden lg:flex  mb-5 space-x-3 whitespace-nowrap text-gray-800'>
            <p className='tags'>Cancellation Flexabilty</p>
            <p className='tags'>Type of place</p>
            <p className='tags'>Price</p>
            <p className='tags'>Rooms and beds</p>
            <p className='tags'>More filters</p>


          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
