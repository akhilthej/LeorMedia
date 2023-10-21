import React, { useState } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [ // Define the images array here
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
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-96 md:h-72 lg:h-96">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-white/40 rounded-full cursor-pointer hover:bg-white/50 focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-white/40 rounded-full cursor-pointer hover:bg-white/50 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
