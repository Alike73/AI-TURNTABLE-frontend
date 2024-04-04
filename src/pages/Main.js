import React, { useEffect, useState } from 'react'
import Turntable from '../components/turntable/Turntable';
import Hero from '../components/hero/Hero';
import VinylLibrary from '../components/vinyl-library/VinylLibrary';
import { getSounds } from '../api/FetchRecords';
import ScrollSet from '../components/ScrollSet/ScrollSet';
import { getMeAdmin } from '../api/FetchAdminPass';

const Main = () => {

    const [sounds, setSounds] = useState([]);
    const [isAdminPass, setIsAdminPass] = useState([]);

    useEffect(() => {
        getMeAdmin(setIsAdminPass)
        getSounds(setSounds)
    }, []);

    const misterY = isAdminPass.map((item) => (item.password))
    const misterX = misterY[0];

    console.log(misterX)

    return (
        <div className='main'>
            <ScrollSet />
            <Hero />
            <VinylLibrary sounds = { sounds } />
            <Turntable />
        </div>
    )
};

export default Main;