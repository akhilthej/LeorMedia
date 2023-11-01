import React from 'react';

const ImageData = [
  {
    id: 1,
    name: 'Commercial',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
  {
    id: 1,
    name: 'Audio Launch',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
  {
    id: 1,
    name: 'Award Nights',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
  {
    id: 1,
    name: 'Corporate',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
  {
    id: 1,
    name: 'Cultural Night',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
  {
    id: 1,
    name: 'Fashion Show',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
  {
    id: 1,
    name: 'Product Launch',
    thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
    Subtitle: 'Director Name',

  },
];

const ImageData2 = [
  /*Wedding Section */
{
  id: 1,
  name: 'Destination Wedding',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},
{
  id: 1,
  name: 'Engagement Planner',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},
{
  id: 1,
  name: 'Mehandi Decor',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},
{
  id: 1,
  name: 'Pellikoduku Event',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},
{
  id: 1,
  name: 'Pellikuthuru Event',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},
{
  id: 1,
  name: 'Reception',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},
{
  id: 1,
  name: 'Sangeeth',
  thumbnail: 'https://drive.google.com/uc?id=1jEqN6j6uqaTY6Ta4SxSLLGQfXoNr1LWS',
  Subtitle: 'Director Name',

},

];


const EventsGallery = () => {
  return (
    <section>
  <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">

    <div className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-black">
        Get global presents.
      </p>
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Weddings
      </h2>
      <p className="text-sm font-medium text-black">
      "In today's digital-driven world, businesses rely on digital marketing to expand their reach, engage with customers, and achieve success. It offers cost-effective strategies, real-time insights, and the ability to adapt to the ever-changing online landscape, making it an indispensable tool for modern businesses."
      </p></div></div>
    </section>
      {/*Gallery */}
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-4 pl-5 pr-5">
        {ImageData2.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="thumbnail-container">
              <img className="p-3" src={movie.thumbnail} alt={movie.name} />
              <div className="overlay"></div> {/* Black color overlay */}
            </div>
            <h1 className="text-black text-center">{movie.name}</h1>
            <h3 className="text-black text-center text-sm">{movie.Subtitle}</h3>
          </div>
        ))}
    </div>
    
      
      {/*Title */}
  <section className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">

    <div className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-black">
        Get global presents.
      </p>
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
        Other Events
      </h2>
      <p className="text-sm font-medium text-black">
      "In today's digital-driven world, businesses rely on digital marketing to expand their reach, engage with customers, and achieve success. It offers cost-effective strategies, real-time insights, and the ability to adapt to the ever-changing online landscape, making it an indispensable tool for modern businesses."
      </p></div></div>
    </section>
      {/*Gallery */}
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-4 pl-5 pr-5">
        {ImageData.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="thumbnail-container">
              <img className="p-3" src={movie.thumbnail} alt={movie.name} />
              <div className="overlay"></div> {/* Black color overlay */}
            </div>
            <h1 className="text-black text-center">{movie.name}</h1>
            <h3 className="text-black text-center text-sm">{movie.Subtitle}</h3>
          </div>
        ))}
    </div>

   



    </section>

    
  );
};

export default EventsGallery;
