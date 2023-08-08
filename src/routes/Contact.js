import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/PAGES/Contact/contact.jsx';


const Home = () => {
    return (
        
        <div className='home' >
            <Helmet>
                <title>Leor Media - Contact</title>
                <meta name="Description" content='Events Management and Digital Marketing Company'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <Contact />

        </div>
            
        
        
    )
}

export default Home
