import React, { useEffect, useState } from 'react'
import Turntable from '../components/turntable/Turntable';
import Hero from '../components/hero/Hero';
import VinylLibrary from '../components/vinyl-library/VinylLibrary';
import { getSounds } from '../api/FetchRecords';

const Main = () => {

    const [sounds, setSounds] = useState([]);

    useEffect(() => {
        getSounds(setSounds)
    }, []);

    return (
        <div className='main'>
            <Hero />
            <VinylLibrary sounds = { sounds } />
            <Turntable />
        </div>
    )
};

export default Main;