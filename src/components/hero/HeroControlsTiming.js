import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentTime, getDuration } from '../../redux/AudioSlice';

const HeroControlsTiming = () => {

    const currentTime = useSelector(getCurrentTime);
    const duration = useSelector(getDuration);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className='d-flex justify-content-between hero_range_count_wrapper px-3'>
            <small className='ps-3'>{ formatTime(currentTime) }</small>
            <small className='pe-3'>{ formatTime(duration) }</small>
        </div>
    )
};

export default HeroControlsTiming;