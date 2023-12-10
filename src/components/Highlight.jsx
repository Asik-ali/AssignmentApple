import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
// import RadioButton from './f';
import App from './f';
// import video from "../assets/videos/4k.mp4";

const Highlight = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const playAndPause = async () => {
  //     try {
  //       await videoElement.play();
  //       setTimeout(() => {
  //         videoElement.pause();
  //       }, 30000);
  //     } catch (error) {
  //       console.error('Error playing the video:', error);
  //     }
  //   };

  //   playAndPause();
  // }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <section>
      <div className='flex lg:flex-row flex-col justify-between lg:ps-36 mt-12 items-center'>
        <h1 class="text-[#86868B] text-3xl lg:text-6xl font-sf pe-8 lg:pe-0">Get the highlights.</h1>




        <div className='flex lg:me-5 lg:flex-row flex-col gap-2 lg:gap-0 mt-2'>
          <div className='flex  items-center justify-center'>
            <h1 className='text-[#278BEA] pe-36 lg:pe-12 lg:ps-0'>Watch the film <FontAwesomeIcon icon={faPlayCircle}  style={{ color: '#278BEA' }} /></h1>
          </div>
          <div className='flex items-center justify-center'>

            <h1 className='text-[#278BEA]'>Watch the events </h1>
            <FontAwesomeIcon icon={faGreaterThan} className='pt-1' style={{ color: '#278BEA', height: 12, width: 21.2 }} />
          </div>
        </div>

      </div>
      {/* <video width="1200" height="300" autoPlay muted loop ref={videoRef} className='ps-24 pt-8'>
        <source src={video} type="video/mp4" />

      </video> */}
      <App />

    </section>
  );
}

export default Highlight;
