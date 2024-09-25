import Image from 'next/image';
import React from 'react';

function LargeCard({ img, title, description, ButtonText }: any) {
  return (
    <section className='relative py-16 cursor-pointer'>
      {/* Image and content wrapper */}
      <div className='relative h-96 min-w-[300px]'>
        {/* Image container */}
        <Image src={img} alt={title} objectFit='cover' layout='fill' loading='lazy' />

        {/* Content container */}
        <div className='absolute inset-0 flex flex-col justify-center items-start p-10'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-46 mb-2 '>{title}</h3>
          <p className='text-sm sm:text-xs md:text-base '>{description}</p>

          <button className='text-xs text-white bg-gray-900 px-2 py-1 rounded-lg mt-5 sm:px-6 sm:py-2'>
            {ButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default LargeCard;
