import React from 'react'
import img from "../assets/videos/l.mp4"
const Hero = () => {
    return (
        <section className='bg-black text-[#BEB8AE] flex flex-col justify-center items-center gap-3'>
            <h2 className='text-4xl'>  iphone 15 pro</h2>
            {/* <video src={img}></video> */}
            <video width="1200" height="300" autoPlay muted className='lg:ps-24 pt-8'>
                <source src={img} type="video/mp4" />

            </video>
            <button className='bg-[#0071E3]  text-white px-8 py-2 rounded-3xl'>Buy</button>
            <h1 >From ₹21483.00/mo.‡ or ₹134900.00*</h1>
        </section>
    )
}

export default Hero