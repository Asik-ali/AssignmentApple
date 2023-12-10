import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DemoCarousel.css'; // Import a separate CSS file for styling

const DemoCarousel = () => {
  const onChange = (index, item) => {
    console.log(`Changed to slide ${index + 1}`);
  };

  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorStyle = {
      width: isSelected ? '10px' : '5px',
      height: isSelected ? '10px' : '5px',
      backgroundColor:
        index === 0
          ? '#2D2D2D'
          : index === 1
          ? '#9E9B96'
          : index === 2
          ? '#827E7A'
          : index === 3
          ? '#33363D'
          : index === 4
          ? '#E2DFD8'
          : index === 5
          ? '#424240'
          : 'green',
      margin: '0 5px',
      cursor: 'pointer',
      marginTop: '20%',
    };

    return (
      <li
        style={indicatorStyle}
        onClick={(e) => onClickHandler(e, index)}
        key={index}
        aria-label={`slide ${label || index + 1}`}
        role="button"
        tabIndex={0}
        className={`dot ${isSelected ? 'selected' : ''}`}
      />
    );
  };

  return (
    <div className="custom-carousel-container">
      <Carousel
        showArrows={false}
        onChange={onChange}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={true}
        showIndicators={true}
        renderIndicator={renderCustomIndicator}
      >
        <div>
          <img
            src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/all_colors__eppfcocn9mky_large.jpg"
            alt="Slide 1"
            className="responsive-image"
          />
          <p className="text-white p-4 text-center">6.1” iPhone 15 Pro1 in four colors</p>
        </div>
        <div>
          <img
            src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg"
            alt="Slide 2"
            className="responsive-image"
          />
          <p className="text-white p-4 text-center">6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Natural Titanium</p>
        </div>
        <div>
          <img
            src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/natural_titanium__ccl12n7vwwxe_large.jpg"
            alt="Slide 3"
            className="responsive-image"
          />
        </div>
        <div>
          <img
            src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/white_titanium__b3fwwp6zrrhy_large.jpg"
            alt="Slide 4"
            className="responsive-image"
          />
          <p className="text-white p-4 text-center">6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in White Titanium</p>
        </div>
        <div>
          <img
            src="https://www.apple.com/in/iphone-15-pro/images/overview/closer-look/white_titanium__b3fwwp6zrrhy_large.jpg"
            alt="Slide 5"
            className="responsive-image"
          />
          <p className="text-white p-4 text-center">6.7” iPhone 15 Pro Max1 and 6.1” iPhone 15 Pro1 in Black Titanium</p>
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
