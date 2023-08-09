import React from 'react';
import { VscVmRunning, VscRadioTower, VscGlobe, VscDeviceCameraVideo, VscDeviceCamera, VscLiveShare, VscBroadcast, VscMegaphone, } from "react-icons/vsc";

import './advertising.css';

const BTLs = () => {

    const serviceData = [
        { name: "Brand Promotions", icon: <VscVmRunning size={48} /> },
        { name: "Road Shows", icon: <VscRadioTower size={48} /> },
        { name: "Experiential Marketing", icon: <VscGlobe size={48} /> },
        { name: "Mall Activities", icon: <VscDeviceCameraVideo size={48} /> },
        { name: "Retail Store Activities", icon: <VscDeviceCamera size={48} /> },
        { name: "Direct Marketing", icon: <VscLiveShare size={48} /> },
        { name: "Digital Advertising", icon: <VscBroadcast size={48} /> },
        { name: "Tele Marketing", icon: <VscMegaphone size={48} /> },
    ];

  return (
    <main>
    {/*Section -1*/}
<section>
  <div className="btl-cover">
    <div className="btl-content">
      <h3></h3>
      <h1>BTL ADVERTISING</h1>
      <p>Below-the-line Advertising</p>
      <div>
      <button>Contact Now</button>
      </div>
    </div>
  </div>
</section>



<section className="py-10 bg-gray-200 flex justify-center items-center px-10">
    <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceData.map((service, index) => (
                <button
                    key={index}
                    className="bg-orange-500 hover:bg-yellow-500 text-white font-semibold py-4 px-2 focus:outline-none focus:shadow-outline text-center flex flex-col items-center rounded-xl"
                >
                    <div className="mb-2">{service.icon}</div>
                    <span>{service.name}</span>
                </button>
            ))}
        </div>
    </div>
</section>



</main>

  )
}

export default BTLs