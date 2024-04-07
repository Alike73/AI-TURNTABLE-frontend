import React from 'react';
import { useSelector } from 'react-redux';
import { getIsPlayingAudio } from '../../redux/AudioSlice';

const Equalizer2 = () => {

    const isPlaying = useSelector(getIsPlayingAudio);

    return (
        <div className={ `equalizer_2 ${ isPlaying ? "active play-equalizer_2" : "" }` }>
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
};

export default Equalizer2;