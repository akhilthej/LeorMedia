import React, { useState, useEffect } from "react";
import slider1 from '../assets/Common/slider/slider1.png'
import slider2 from '../assets/Common/slider/slider2.png'
import slider3 from '../assets/Common/slider/slider3.png'
import slider4 from '../assets/Common/slider/slider4.png'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      url: slider1,
      title: 'Events',
      description: 'Discover exciting events in your area.',
      button1: { text: 'Learn More', link: '/events' },
      button2: { text: 'Get Tickets', link: '/tickets' },
    },
    {
      url: slider2,
      title: 'Advertising',
      description: 'Effective advertising solutions for your business.',
      button1: { text: 'See Services', link: '/services' },
      button2: { text: 'Contact Us', link: '/contact' },
    },
    {
      url: slider3,
      title: 'Branding',
      description: 'Strategic marketing services to boost your brand.',
      button1: { text: 'Explore Plans', link: '/plans' },
      button2: { text: 'Contact Us', link: '/contact' },
    },
    {
      url:  slider4,
      title: 'Digital Creative Media',
      description: 'Explore our shop for unique products and gifts.',
      button1: { text: 'Shop Now', link: '/shop' },
      button2: { text: 'Contact Support', link: '/support' },
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
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
    <div className="relative mx-2 py-10 md:py-0">
      <div className="flex items-center justify-center h-52 md:h-72 lg:h-[70vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0 rounded-lg"></div>
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center upanddown pb-8 font-extrabold text-white text-4xl md:text-7xl lg:text-8xl mt-3 ">
              {image.title}
              <span className="text-xs sm:text-lg text-white mt-2 text-center">{image.description}</span>
              <div className="mt-2">
                <a href={image.button1.link} className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-5 sm:px-12 py-2 font-medium text-white transition-colors mx-2">{image.button1.text}</a>
                <a href={image.button2.link} className="text-xs sm:text-sm transform rounded bg-orange-500 border border-slate-200 px-5 sm:px-12 py-2 font-medium text-white transition-colors mx-2">{image.button2.text}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;