import React from 'react';
import { VscVmRunning, VscRadioTower, VscGlobe, VscDeviceCameraVideo, VscDeviceCamera, VscLiveShare, VscBroadcast, VscMegaphone, } from "react-icons/vsc";



const ATLs = () => {

    const DisplayBoards = [
        { name: "Bill Boards", icon: <VscVmRunning size={48} /> },
        { name: "Unipole", icon: <VscRadioTower size={48} /> },
        { name: "Wall Panel", icon: <VscGlobe size={48} /> },
        { name: "Over Head Pannel", icon: <VscDeviceCameraVideo size={48} /> },
        { name: "Building Wraps", icon: <VscDeviceCamera size={48} /> },
        { name: "Bus Shelters", icon: <VscLiveShare size={48} /> },
        { name: "Flyover Pillars", icon: <VscBroadcast size={48} /> },
        { name: "Malls", icon: <VscMegaphone size={48} /> },
        { name: "Railway Stations", icon: <VscBroadcast size={48} /> },
        { name: "Airports", icon: <VscMegaphone size={48} /> },
    ];
    const TransitMedia = [
        { name: "Car Branding", icon: <VscVmRunning size={48} /> },
        { name: "Bus Panel", icon: <VscRadioTower size={48} /> },
        { name: "Bus wraps", icon: <VscGlobe size={48} /> },
        { name: "Mobile Display Vans", icon: <VscDeviceCameraVideo size={48} /> },
        { name: "Local & Metro", icon: <VscDeviceCamera size={48} /> },
        { name: "Truck Wraps", icon: <VscLiveShare size={48} /> },
        { name: "Autorickshaw Branding", icon: <VscBroadcast size={48} /> },
        
    ];

    const StrategicFormat = [
        { name: "Pole Kiosk", icon: <VscVmRunning size={48} /> },
        { name: "Metro Kiosk", icon: <VscRadioTower size={48} /> },
        { name: "College kiosk", icon: <VscGlobe size={48} /> },
        { name: "Bench Branding", icon: <VscDeviceCameraVideo size={48} /> },
        { name: "Barcades", icon: <VscDeviceCamera size={48} /> },
        { name: "Airport Trolley", icon: <VscLiveShare size={48} /> },
        { name: "Hyper Marts", icon: <VscBroadcast size={48} /> },
        { name: "Event Advertising", icon: <VscBroadcast size={48} /> },
        
    ];

    const PrintMedia = [
        { name: "Newspapers", icon: <VscVmRunning size={48} /> },
        { name: "Magazines", icon: <VscRadioTower size={48} /> },
        { name: "News Letters", icon: <VscGlobe size={48} /> },
        { name: "Digital Media Buying", icon: <VscDeviceCameraVideo size={48} /> },
        
    ];

    const ElectronicMedia = [
        { name: "Theatres", icon: <VscVmRunning size={48} /> },
        { name: "Telivision", icon: <VscRadioTower size={48} /> },
        { name: "Infilm", icon: <VscGlobe size={48} /> },
        { name: "Radio", icon: <VscDeviceCameraVideo size={48} /> },
        
        
    ];



  return (
    <main>
    {/*Section -1*/}
<section>
  <div className="btl-cover">
    <div className="btl-content">
      <h3></h3>
      <h1>ATL ADVERTISING</h1>
      <p>Above-the-line Advertising</p>
      <div>
        <button>Contact Now</button>
      </div>
    </div>
  </div>
</section>



<section className="py-10 bg-gray-200  justify-center items-center px-10">
<h3 className='text-center text-lg font-bold '>Display Boards</h3>
<div className='felx'>
    <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DisplayBoards.map((service, index) => (
                <button
                    key={index}
                    className="bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-4 px-2 focus:outline-none focus:shadow-outline text-center flex flex-col items-center rounded-xl">
                    <div className="mb-2">{service.icon}</div>
                    <span>{service.name}</span>
                </button>
            ))}
        </div></div>
    </div>
</section>


<section className="py-10 bg-gray-200  justify-center items-center px-10">
<h3 className='text-center text-lg font-bold '>Transit Media</h3>
<div className='felx'>
    <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TransitMedia.map((service, index) => (
                <button
                    key={index}
                    className="bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-4 px-2 focus:outline-none focus:shadow-outline text-center flex flex-col items-center rounded-xl">
                    <div className="mb-2">{service.icon}</div>
                    <span>{service.name}</span>
                </button>
            ))}
        </div></div>
    </div>
</section>

<section className="py-10 bg-gray-200  justify-center items-center px-10">
<h3 className='text-center text-lg font-bold '>Strategic Format</h3>
<div className='felx'>
    <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {StrategicFormat.map((service, index) => (
                <button
                    key={index}
                    className="bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-4 px-2 focus:outline-none focus:shadow-outline text-center flex flex-col items-center rounded-xl">
                    <div className="mb-2">{service.icon}</div>
                    <span>{service.name}</span>
                </button>
            ))}
        </div></div>
    </div>
</section>

<section className="py-10 bg-gray-200  justify-center items-center px-10">
<h3 className='text-center text-lg font-bold '>Print Media</h3>
<div className='felx'>
    <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PrintMedia.map((service, index) => (
                <button
                    key={index}
                    className="bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-4 px-2 focus:outline-none focus:shadow-outline text-center flex flex-col items-center rounded-xl">
                    <div className="mb-2">{service.icon}</div>
                    <span>{service.name}</span>
                </button>
            ))}
        </div></div>
    </div>
</section>

<section className="py-10 bg-gray-200  justify-center items-center px-10">
<h3 className='text-center text-lg font-bold '>Electronic Media</h3>
<div className='felx'>
    <div className=" container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ElectronicMedia.map((service, index) => (
                <button
                    key={index}
                    className="bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-4 px-2 focus:outline-none focus:shadow-outline text-center flex flex-col items-center rounded-xl">
                    <div className="mb-2">{service.icon}</div>
                    <span>{service.name}</span>
                </button>
            ))}
        </div></div>
    </div>
</section>


</main>

  )
}

export default ATLs