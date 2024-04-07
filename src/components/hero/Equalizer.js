import React from 'react';
import { useSelector } from 'react-redux';
import HeroVinylTitleSvg from './HeroVinylTitleSvg';
import { getIsPlayingAudio } from '../../redux/AudioSlice';


const Equalizer = () => {

    const isPlaying = useSelector(getIsPlayingAudio);

    return (
        <div className="top_equalizer_wrapper p-4">
            <div id="box" className="animated fadeIn">
                { isPlaying && <HeroVinylTitleSvg /> }
                <div id="circle">
                    <div id="square">
                        <span id="bar" className={ `bar2 ${ isPlaying ? "b1" : "" }` } />
                        <span id="bar" className={ `bar1 ${ isPlaying ? "b2" : "" }` } />
                        <span id="bar" className={ `bar2 ${ isPlaying ? "b3" : "" }` } />
                        <span id="bar" className={ `bar1 ${ isPlaying ? "b4" : "" }` } />
                        <span id="bar" className={ `bar2 ${ isPlaying ? "b5" : "" }` } />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Equalizer;