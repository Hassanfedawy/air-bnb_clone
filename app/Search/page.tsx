import { useSelector } from "react-redux"
import { RootState } from "../Redux/Store"
import { format } from 'date-fns';


function Page() {

  const {startDate,endDate}= useSelector((state:RootState)=>state.guests)

  const formatedStartDate=format(startDate,"dd-mmmm-yyyy")
  const formatedEndDate=format(endDate,"dd-mmmm-yyyy")

  return (
    <div>
      <main className='flex'>
        <section className='pt-14 px-6'>
          <p className='text-xs'>300+ Stays for 5 guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in london {formatedStartDate}--{formatedEndDate}</h1>

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
