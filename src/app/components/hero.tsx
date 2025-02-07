import React from 'react';
import Image from 'next/image';
import sofa from '../../../public/Rocket single seater 1.png'
//   import '@fontsource/poppins';

const Hero = () => {
  return (
    <div className='w-full h-auto pt-[150px] md:h-[735px] bg-[#FBEBB5] flex flex-col justify-center md:py-[100px]'>
      <div className='flex flex-col md:flex-row justify-center items-center pt-0 md:pt-[50px] mx-5 md:mx-auto'>
        <div className='w-full md:w-[440px] h-auto text-center md:text-left md:pl-8'>
          <h1 className='poppins font-medium text-[24px] md:text-[50px] md:pl-5 tracking-tight text-black'>
            Rocket Single Seater
          </h1>
          <button className='poppins mt-4 text-lg md:text-xl ml-5 hover:scale-110 border-b-2 border-black pb-4 hover:font-bold text-black'>Shop Now</button>
      
        </div>
        <div className='mt-8 md:mt-0 flex justify-center w-full md:w-auto'>
          <Image
            src={sofa}
            alt='sofa'
            width={653}
            className='max-w-full h-auto'
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;