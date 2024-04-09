import React from 'react';
import { useSelector } from 'react-redux';
import { getIsPlayingAudio } from '../../redux/AudioSlice';
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { IoStopOutline } from "react-icons/io5";

const HeroVinylControlsBtnGroup = ({ handlePlayPause, handleStop }) => {

    const isPlaying = useSelector(getIsPlayingAudio);

    return (
        <div className='d-flex justify-content-center px-3'>
            <button 
            className="btn p-1 lh-1 me-3 hero_btn" 
            type="button"
            onClick={ handlePlayPause }
            >
            { isPlaying 
                ? (<CiPause1 className="fs-4 hero_ico" />) 
                : (<IoPlayOutline className="fs-4 hero_ico" />)
            }
            </button>
            <button 
            className="btn p-1 lh-1 hero_btn" 
            type="button"
            onClick={ handleStop }
            >
                <IoStopOutline className="fs-4 hero_ico" />
            </button>
        </div>
    )
};

export default HeroVinylControlsBtnGroup;