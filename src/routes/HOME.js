import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeCode from '../components/PAGES/HOME PAGE/HomeCode'


const Home = () => {
    return (
        
        <div className='home' >
            <Helmet>
                <title>Leor Media</title>
                <meta name="Description" content='Events Management and Digital Marketing Agency'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <HomeCode />

        </div>
            
        
        
    )
}

export default Home
