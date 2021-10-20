import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Features/>
            <Services/>
            <Doctors/>
        </div>
    );
};

export default Home;