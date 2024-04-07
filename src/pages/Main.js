import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSounds } from '../api/FetchRecords';
import { getMeAdmin } from '../api/FetchAdminPass';
import { setAdminPass } from '../redux/AdminSecureSlice';
import Turntable from '../components/turntable/Turntable';
import Hero from '../components/hero/Hero';
import VinylLibrary from '../components/vinyl-library/VinylLibrary';
import ScrollSet from '../components/ScrollSet/ScrollSet';
import Editor from '../components/editor/Editor';
import { setVinylCover, setVinylRecordLink, setVinylTitle } from '../redux/VinylRecordSlice';
import { getIsPlayingAudio, setActiveArm, setCurrentTime, setIsPlaying, setPlayEqualizer, setResetAnimation, setShowHeroPlayer } from '../redux/AudioSlice';

const Main = () => {

    const [sounds, setSounds] = useState([]);
    const [isAdminPass, setIsAdminPass] = useState([]);
    const misterY = isAdminPass.map((item) => (item.password))
    const misterX = misterY[0];
    // ------------------------------------------------
    const isPlaying = useSelector(getIsPlayingAudio);
    const audioRef = useRef(null);
    // ------------------------------------------------
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

    // ----------Play,Pause,Stop-Audio---------------------
    const handlePlayPause = () => {
        const audio = audioRef.current;
        const audios = document.getElementsByTagName('audio');

        if (isPlaying) {
            audio.pause();
            dispatch(setIsPlaying(false));
        
            let hasPlayingAudio = false;
            for (let i = 0; i < audios.length; i++) {
            if (!audios[i].paused) {
                hasPlayingAudio = true;
                break;
            }
            }
            dispatch(setPlayEqualizer(hasPlayingAudio));
        } else {
            setTimeout(() => {
                audio.play();
                dispatch(setIsPlaying(true));
                dispatch(setPlayEqualizer(true));
            }, 300); // Delay of 0.3 seconds before playing the audio
        }
        dispatch(setActiveArm(true));

        audioRef.current.ontimeupdate = () => {
            // Dispatch the setCurrentTime action with the current audio time
            dispatch(setCurrentTime(audioRef.current.currentTime));
        };
        dispatch(setShowHeroPlayer(true));
    };

    const handleStop = () => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
        dispatch(setIsPlaying(false));
        dispatch(setResetAnimation(true));
        dispatch(setActiveArm(false));
        const audios = document.getElementsByTagName('audio');
        let hasPlayingAudio = false;
        for (let i = 0; i < audios.length; i++) {
            if (!audios[i].paused) {
            hasPlayingAudio = true;
            break;
            }
        }
        dispatch(setPlayEqualizer(hasPlayingAudio));
    };

//   -----------------------------------------------------------------------------------
    

    return (
        <div className='main'>
            <Editor />
            <ScrollSet />
            <Hero />
            <VinylLibrary 
                audioRef = { audioRef } 
                sounds = { sounds }
            />
            <Turntable
                handlePlayPause = { handlePlayPause } 
                handleStop = { handleStop } 
                audioRef = { audioRef }
            />
        </div>
    )
};

export default Main;