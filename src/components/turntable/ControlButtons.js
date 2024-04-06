import React from 'react'
import { getIsPlayingAudio } from '../../redux/AudioSlice';
import { useSelector } from 'react-redux';
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { IoStopOutline } from "react-icons/io5";


const ControlButtons = ({ handlePlayPause, handleStop }) => {

    const isPlaying = useSelector(getIsPlayingAudio);
    

    return (
        <div className='control-buttons-group'>
            <div className="button_wrapper">
                <button className="button" onClick={ handlePlayPause }>
                    { isPlaying 
                        ? (<CiPause1 className="fs-4 button_ico" />) 
                        : (<IoPlayOutline className="fs-4 button_ico" />)
                    }
                </button>
            </div>
            <div className="button_wrapper">
                <button 
                className="button"
                onClick={ handleStop }
                >
                    <IoStopOutline className="fs-4 button_ico" />
                </button>
            </div>
        </div>
    )
};

export default ControlButtons;