import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getVinylCover, getVinylRecordLink, getVinylTitle } from '../../redux/VinylRecordSlice';
import TurntableVinyl from './TurntableVinyl';
import TurntableArm from './TurntableArm';
import SpeakerBox from './SpeakerBox';
import ControlButtons from './ControlButtons';
import AudioDuration from './AudioDuration';
import SoundVolume from './SoundVolume';
import Equalizer2 from './Equalizer2';
import HomeMade from './HomeMade';
import { getVolume, setVolume } from '../../redux/AudioSlice';

const Turntable = ({ handlePlayPause, handleStop, audioRef }) => {


    // --->All-Of-Them-To-Fix-Letter<----
    const vinylCover = useSelector(getVinylCover);
    const vinylTitle = useSelector(getVinylTitle);
    const vinylRecordLink = useSelector(getVinylRecordLink);
    const volume = useSelector(getVolume);
    const dispatch = useDispatch();

    const handleVolumeChange = (event) => {
        const audio = audioRef.current;
        const volumeValue = parseInt(event.target.value, 10);
        dispatch(setVolume(volumeValue));
        audio.volume = volumeValue / 100; 
    };

    

    console.log(vinylCover)
    console.log(vinylTitle)
    console.log(vinylRecordLink)

    return (
        <div className='container pb-5'>
            <audio src={vinylRecordLink} ref={audioRef} loop />
            <div className="col-10 col-sm-8 col-lg-7 mt-5 mx-auto pb-5">
                <div className="turntable">
                    <HomeMade />
                    <SoundVolume value={volume} onChange={handleVolumeChange} />
                    <TurntableArm />
                    <Equalizer2 />
        
                    <div className="screw sc_1" />
                    <div className="screw sc_2" />
                    <div className="screw sc_3" />
                    <div className="screw sc_4" />

                    <div className="vinyl_base">
                        <div className='vinyl__base_spin' />
                    </div>
                    <TurntableVinyl />
                    <AudioDuration audioRef={audioRef} />
                    <ControlButtons handlePlayPause = { handlePlayPause } handleStop = { handleStop } />
                    <SpeakerBox />
                </div>
            </div>
        </div>
    )
};

export default Turntable;