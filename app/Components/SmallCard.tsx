import Image from "next/image";

type DataType = {
  img: string;
  location: string;
  distance: string;
};

interface SmallCardProps {
  data: DataType; // Define the type of data prop
}

function SmallCard({ data }: SmallCardProps) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 hover:bg-gray-100 transition-transform duration-200 ease-out"> 
      <div className="relative h-16 w-16 "> 
        <Image
          src={data.img}
          alt={`Image of ${data.location}`} // More descriptive alt text
          loading="lazy"
          layout="fill"
          objectFit="cover" 
          className="rounded-lg"
        />
      </div>

      <div > 
        <h2 className="text-lg font-semibold">{data.location}</h2>
        <h3 className="text-gray-500 ">{data.distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
