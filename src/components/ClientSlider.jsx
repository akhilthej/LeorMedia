import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: window.innerWidth < 768 ? 4 : 6,
  };

  // Function to import all images from the specified directory
  const importAll = (r) => r.keys().map(r);
  // Import images from the Memberslogo folder
  const brandImages = importAll(
    require.context(
      "../assets/Common/Clients/",
      false,
      /\.(png|jpe?g|webp|svg)$/
    )
  );

  return (
    <div >
      <p className="text-center text-[40px] font-bold">Associated With</p>
      
      <div className="container mx-auto">
        <Slider {...settings}>
          {brandImages.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Brand Logo ${index + 1}`}
                width={200} // Set the desired width
                height={100} // Set the desired height
                className="mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
     
    </div>
  );
};

export default ClientSlider;
