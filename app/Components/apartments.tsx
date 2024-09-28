import Image from "next/image"
import { faHeart,faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Apartments({data}:any) {
  return (
    <div className="flex mb-5 p-3 cursor-pointer hover:scale-95 hover:bg-gray-200 transition-transform duration-200 ease-out border-b shadow-lg first:border-t-2 ">
      <div className="relative w-40 h-24 md:h-52 md:w-80 mr-4">
        <Image src={data.img} alt={data.title} layout="fill" objectFit="contain" loading="lazy" className="rounded-3xl"/>
      </div>

      <div className="flex flex-col flex-grow justify-around">

        <div className="flex justify-between text-xs">
            <p>{data.location}</p>
            <FontAwesomeIcon icon={faHeart} className="h-4 cursor-pointer md:h-7"/>
        </div>
        <h4 className="text-xl">{data.title}</h4>

        <div className="border-b pt-2 flex">
            <p className="pt-2 text-xs text-gray-500 flex-grow">{data.description}</p>
        </div>

        <div className="flex justify-between p-5">
            <p>{data.star} <FontAwesomeIcon icon={faStar} className="text-red-400" /> </p>
            <h4 className="text-lg lg:text-2xl font-semibold">{data.price}</h4>
            
        </div>

      </div>

    </div>
  )
}

export default Apartments
