import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getSounds } from '../api/FetchRecords';
import { getMeAdmin } from '../api/FetchAdminPass';
import { setAdminPass } from '../redux/AdminSecureSlice';
import Turntable from '../components/turntable/Turntable';
import Hero from '../components/hero/Hero';
import VinylLibrary from '../components/vinyl-library/VinylLibrary';
import ScrollSet from '../components/ScrollSet/ScrollSet';
import Editor from '../components/editor/Editor';

const Main = () => {

    const [sounds, setSounds] = useState([]);
    const [isAdminPass, setIsAdminPass] = useState([]);
    const misterY = isAdminPass.map((item) => (item.password))
    const misterX = misterY[0];
    const dispatch = useDispatch();

    useEffect(() => {
        getMeAdmin(setIsAdminPass)
        dispatch(setAdminPass(misterX));
        getSounds(setSounds)
    }, [dispatch, misterX]);
    

    return (
        <div className='main'>
            <Editor />
            <ScrollSet />
            <Hero />
            <VinylLibrary sounds = { sounds } />
            <Turntable />
        </div>
    )
};

export default Main;