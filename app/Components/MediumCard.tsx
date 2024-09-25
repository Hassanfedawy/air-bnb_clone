import Image from "next/image";

type DataType = {
    img: string;
    title:string;
  };
  
  interface mediumCardProps {
    data: DataType; // Define the type of data prop
  }
function MediumCard({data}:mediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-300">
        <div className="relative flex h-80 w-80">
            <Image src={data.img} alt={data.title} layout="fill" objectFit="contain" className="rounded-xl"/>
        </div>
        <h3 className="text-2xl mt-3">{data.title}</h3>
      
    </div>
  )
}

export default MediumCard
