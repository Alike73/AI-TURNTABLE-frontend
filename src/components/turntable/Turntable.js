import React from 'react'
import TurntableVinyl from './TurntableVinyl';
import TurntableArm from './TurntableArm';
import SpeakerBox from './SpeakerBox';
import ControlButtons from './ControlButtons';
import AudioDuration from './AudioDuration';
import SoundVolume from './SoundVolume';
import Equalizer2 from './Equalizer2';
import HomeMade from './HomeMade';
import { useSelector } from 'react-redux';
import { getVinylCover, getVinylRecordLink, getVinylTitle } from '../../redux/VinylRecordSlice';

const Turntable = () => {


    // --->All-Of-Them-To-Fix-Letter<----
    const vinylCover = useSelector(getVinylCover);
    const vinylTitle = useSelector(getVinylTitle);
    const vinylRecordLink = useSelector(getVinylRecordLink);

    console.log(vinylCover)
    console.log(vinylTitle)
    console.log(vinylRecordLink)

    return (
        <div className='container'>
            <div className="col-10 col-sm-8 col-lg-7 mt-5 mx-auto">
                <div className="turntable">
                    <HomeMade />
                    <SoundVolume />
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
                    <AudioDuration />
                    <ControlButtons />
                    <SpeakerBox />
                </div>
            </div>
        </div>
    )
};

export default Turntable;