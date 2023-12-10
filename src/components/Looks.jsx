import React from 'react';
import img from "../assets/images/Looks.jpg";
import DemoCarousel from './IphoneCarousel';

const Looks = () => {
  return (
    <section className='flex flex-col gap-3 lg:ps-32  p-8 rounded-md'>
      <h1 className='text-[#86868B] text-[48px] mb-10 font-sf'>Take a closer look.</h1>
      {/* <img src={img} alt="iphone" className='ps-80 w-fit h-96' /> */}
      <DemoCarousel  />
    </section>
  );
};

export default Looks;
