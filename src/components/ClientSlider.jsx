import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ClientSlider = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 3 : 6,
  };
      const brandImages = [
        'https://drive.google.com/uc?export=view&id=1PFV708lGPRVqEblKT6xjKhKG3tK43KNs',
        'https://drive.google.com/uc?export=view&id=13YNsiRGpLOJAHbuaqUkwG8xoOsVsST_E',
        'https://drive.google.com/uc?export=view&id=15ieVVTnsT0PWrJKN1wZ1TYzIHBWM4kWD',
        'https://drive.google.com/uc?export=view&id=1h9l3CHFVMHrKHYr3VyxNoCwMWqqu0zwU',
        'https://drive.google.com/uc?export=view&id=1wTSqKhzxFyeWbnXQpUbvfvMbKwAqkYyH',
        'https://drive.google.com/uc?export=view&id=1TYXyymdlykBDCkxLM9yobmQm5cJTMOv7',
        'https://drive.google.com/uc?export=view&id=1qIa086CvI6GMEL0ArObzKrQa9uCEXDpv',
        'https://drive.google.com/uc?export=view&id=1iKNryfewqXlbQKaS4oDrlx3X8W-P4Mag',
        'https://drive.google.com/uc?export=view&id=1meuHUOe9Ruok4mSZ22tfEqjOXIVS7Aag',
        'https://drive.google.com/uc?export=view&id=1NizCmQHKiBhz7iqWxDwzNvOjcZkCnp3t',
        'https://drive.google.com/uc?export=view&id=1gFgd-h1rv-jQPvL2nLM80_IvjOvh1nS1',
        'https://drive.google.com/uc?export=view&id=1tR9nYqLj01S5HMh5wBX-cfJNzifLZEjl',
        'https://drive.google.com/uc?export=view&id=1VCKHdykXCFIo82ZvhkQgsxbXZpUZZQG7',
        'https://drive.google.com/uc?export=view&id=1JKdL1ahdta38FBiUzeloQzCoEVvE-Lao',
        'https://drive.google.com/uc?export=view&id=1ifWHgw7PrKD0nJY9wvjroD95Y7smkUOo',
        
    
        // Add more image URLs here
      ];
    
      return (
        <div className="py-10 bg-gray-100">
          <p className='text-center font-bold pb-5'>OUR CLIENTS</p>
          <div className="container mx-auto">
            <Slider {...settings}>
              {brandImages.map((imageUrl, index) => (
                <div key={index}>
                  <img
                    src={imageUrl}
                    alt={`Brand Logo ${index + 1}`}
                    width={200} // Set the desired width
                    height={80}  // Set the desired height
                    className="mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      );
    };
    

export default ClientSlider