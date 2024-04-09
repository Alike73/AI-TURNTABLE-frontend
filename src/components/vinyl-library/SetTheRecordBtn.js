import React from 'react';
import { IoPlayOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getFadeVinyl, setFadeVinyl, setVinylCover, setVinylRecordLink, setVinylTitle } from '../../redux/VinylRecordSlice';
import { setActiveArm, setIsPlaying, setShowHeroPlayer } from '../../redux/AudioSlice';

const SetTheRecordBtn = ({ vinylCover, title, soundLink, recordId, isActive, setActiveRecord, audioRef }) => {

    const dispatch = useDispatch();
    const fadeVinyl = useSelector(getFadeVinyl);

    let fadeTimeout;

    const handleSetVinyl = () => {

        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;

        dispatch(setIsPlaying(false))
        dispatch(setActiveArm(false));

        setActiveRecord(recordId); // Set the active record ID

        dispatch(setFadeVinyl(true))
        // Scroll to bottom after a slight delay
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }, 50);
        
        dispatch(setVinylCover(vinylCover))
        dispatch(setVinylTitle(title))
        dispatch(setVinylRecordLink(soundLink))
        dispatch(setShowHeroPlayer(true))


        // Clear previous timeout if it exists
        if (fadeTimeout) {
            clearTimeout(fadeTimeout);
        }

        // Set dispatch(setFadeVinyl(false)) after 0.5 seconds
        fadeTimeout = setTimeout(() => {
            dispatch(setFadeVinyl(false));
        }, 1600);
    }

    return (
        <button
            disabled = { fadeVinyl=== true } 
            type="button" 
            className="btn play_record_btn"
            onClick={ handleSetVinyl }
        >
            <IoPlayOutline className="btn_ico" />
            <span className={ `play_record_btn_indicator ${ isActive ? "active" : "" }` } />
        </button>
    )
};

export default SetTheRecordBtn;