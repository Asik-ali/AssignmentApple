import React, { useState, useRef, useEffect } from 'react';
import img1 from "../assets/videos/1.mp4";
import img2 from "../assets/videos/2.mp4";
import img3 from "../assets/videos/3.mp4";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = {
    0: useRef(null),
    1: useRef(null),
    2: useRef(null),
  };

  const handleVideoEnded = () => {
    // Automatically switch to the next slide when the video ends
    const nextSlide = (currentSlide + 1) % 3;
    setCurrentSlide(nextSlide);
  };

  // Use useEffect to monitor changes to currentSlide and automatically play the video
  useEffect(() => {
    videoRefs[currentSlide].current.play();
  }, [currentSlide]);

  return (
    <div className='lg:ps-64  mt-8 overflow-hidden'>
      <div>
        {currentSlide === 0 && (
          <div>
            
            <video 
              ref={videoRefs[0]}
              width="932px"
              height="328px"
              autoPlay
              muted
              onEnded={handleVideoEnded}
            >
              <source src={img1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {currentSlide === 1 && (
          <div>
            <video
              ref={videoRefs[1]}
              width="932px"
              height="328px"
              autoPlay
              muted
              onEnded={handleVideoEnded}
            >
              <source src={img2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {currentSlide === 2 && (
          <div>
            <video
              ref={videoRefs[2]}
              width="800px"
              height="400px"
              autoPlay
              muted
              onEnded={handleVideoEnded}
            >
              <source src={img3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
 