import Image from "next/image"
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] w-full">
      <Image src="https://links.papareact.com/0fm" alt="Banner" loading="lazy" objectFit="contain"layout="fill"/>
      <div className="absolute w-full top-1/2 text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 outline-none hover:shadow-xl active:scale-90 transition duration-200">I'm Flexible</button>
      </div>
    </div>
  )
}

export default Banner
