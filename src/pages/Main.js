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
import { setVinylCover, setVinylRecordLink, setVinylTitle } from '../redux/VinylRecordSlice';

const Main = () => {

    const [sounds, setSounds] = useState([]);
    const [isAdminPass, setIsAdminPass] = useState([]);
    const misterY = isAdminPass.map((item) => (item.password))
    const misterX = misterY[0];
    const dispatch = useDispatch();

    const demoCoverImg = sounds.map((item) => (item.image));
    const defaultCoverImg = demoCoverImg[0]
    const demoRecordTitle = sounds.map((item) => (item.title));
    const defaultRecordTitle = demoRecordTitle[0]
    const demoRecord = sounds.map((item) => (item.soundLink));
    const defaultRecordSound = demoRecord[0]

    useEffect(() => {
        getMeAdmin(setIsAdminPass)
        dispatch(setAdminPass(misterX))
        getSounds(setSounds)

        dispatch(setVinylCover(defaultCoverImg))
        dispatch(setVinylTitle(defaultRecordTitle))
        dispatch(setVinylRecordLink(defaultRecordSound))
    }, [dispatch, misterX, defaultCoverImg, defaultRecordTitle, defaultRecordSound]);
    

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