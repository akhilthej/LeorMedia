import React from 'react';
import { VscVmRunning, VscRadioTower, VscDebugDisconnect, VscGlobe, VscDeviceCameraVideo, VscDeviceCamera, VscLiveShare, VscBroadcast, VscMegaphone, VscDesktopDownload, VscPersonAdd, VscPlay } from "react-icons/vsc";


const digital_creative_media = () => {

    const serviceData = [
        { name: "TVC/ AD Filming", icon: <VscVmRunning size={48} /> },
        { name: "Digital commercials", icon: <VscRadioTower size={48} /> },
        { name: "Web commercials", icon: <VscGlobe size={48} /> },
        { name: "Product Explainer videos", icon: <VscDeviceCameraVideo size={48} /> },
        { name: "Company profile videos", icon: <VscDeviceCamera size={48} /> },
        { name: "Customer testimonial videos", icon: <VscLiveShare size={48} /> },
        { name: "Company corporate film", icon: <VscBroadcast size={48} /> },
        { name: "Brand integration film", icon: <VscMegaphone size={48} /> },
        { name: "Product photo and videography", icon: <VscDesktopDownload size={48} /> },
        { name: "Multi channel networking", icon: <VscPersonAdd size={48} /> },
        { name: "Google My Business", icon: <VscDebugDisconnect size={48} /> },
        { name: "YouTube Entertainment", icon: <VscPlay size={48} /> }
    ];

  return (
    <main>
    <section className=" m-20 pt-20 text-center ">
            <div className="container mx-auto">
                <h2 className="text-5xl  mb-4 font-bold leading-9  text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-orange-400 ">DIGITAL CREATIVE MEDIA</h2>
                <p className="text-md sm:text-lg text-gray-700">
                    During this period of the modern digital age, every person wants a unique approach to all the brands and products that they own.
                    This is possible with the help of digital media by creating colorful, interesting and eye-catching visuals to attract people into your product’s world.
                    At Leor Media, we have a very skilled designing team working on all our digital media product advertising specialized in every area mentioned below.
                </p>
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

export default digital_creative_media