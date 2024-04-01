import React from 'react'
import Turntable from '../components/turntable/Turntable';
import Hero from '../components/hero/Hero';
import VinylLibrary from '../components/vinyl-library/VinylLibrary';

const Main = () => {

    return (
        <div className='main'>
            <Hero />
            <VinylLibrary />
            <Turntable />
        </div>
    )
};

export default Main;