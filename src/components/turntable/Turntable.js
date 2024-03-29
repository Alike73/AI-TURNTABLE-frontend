import React from 'react'
import TurntableVinyl from './TurntableVinyl';
import TurntableArm from './TurntableArm';
import SpeakerBox from './SpeakerBox';
import ControlButtons from './ControlButtons';
import AudioDuration from './AudioDuration';
import SoundVolume from './SoundVolume';

const Turntable = () => {

    return (
        <div className='container'>
            <div className="col-10 col-sm-8 col-lg-7 mt-5 mx-auto">
                <div className="turntable">
                    <SoundVolume />
                    <TurntableArm />
                    <div className="screw sc_1" />
                    <div className="screw sc_2" />
                    <div className="screw sc_3" />
                    <div className="screw sc_4" />
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