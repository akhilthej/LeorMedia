import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url:
        'https://drive.google.com/uc?export=view&id=12bHt6P6Qm5csTlzr8S12lldRg-4-m2lg',
      title: 'Events',
    },
    {
      url:
        'https://drive.google.com/uc?export=view&id=1B8bVQ2F9Cny7-p_7aEuP4ZESGrsy7uTj',
      title: 'Advs',
    },
    {
      url:
        'https://drive.google.com/uc?export=view&id=1qbSwRu5YArcxbCsiWQYX6nnPm6K6LKrU',
      title: 'Marketing',
    },
    {
      url:
        'https://drive.google.com/uc?export=view&id=1Bw291U5er6fgvxAmJwMf_y3T1juJ6KEY',
      title: 'Shop',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-96 md:h-72 lg:h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white text-6xl font-semibold bg-black bg-opacity-30">
              {image.title}
            </p>
          </div>
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
