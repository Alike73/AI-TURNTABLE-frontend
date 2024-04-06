import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentTime, getDuration, getIsPlayingAudio, getIsSeeking, setCurrentTime, setDuration, setIsSeeking } from '../../redux/AudioSlice';

const AudioDuration = ({ audioRef }) => {

    const currentTime = useSelector(getCurrentTime);
    const duration = useSelector(getDuration);
    const isSeeking = useSelector(getIsSeeking);
    const isPlaying = useSelector(getIsPlayingAudio);
    const dispatch = useDispatch();

    useEffect(() => {
        const audioElement = audioRef.current;

        const handleTimeUpdate = () => {
            if (!isSeeking) {
                dispatch(setCurrentTime(audioElement.currentTime));
            }
        };

        const handleLoadedMetadata = () => {
            dispatch(setDuration(audioElement.duration));
        };

        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [audioRef, isSeeking, dispatch]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleSeek = (event) => {
        const seekTime = parseFloat(event.target.value);
        setCurrentTime(seekTime);
        audioRef.current.currentTime = seekTime;
    };

    const handleSeekStart = () => {
        dispatch(setIsSeeking(true));
    };

    const handleSeekEnd = () => {
        dispatch(setIsSeeking(false));
    };

    return (
        <div className="audio-duration">
            <div className="durationCount me-3">
            <span className={ `active_indicator ${ isPlaying ? "active" : "" }` } />
                {formatTime(currentTime)}
            </div>
            <div className="slider-wrapper-2">
                <div className="slider-container-2">
                    <div className="slider-track-2">
                        <div className="slider-track-fill-2" style={{ width: `${(currentTime / (duration - 0)) * 100}%` }} />
                        <div className="slider-thumb-2" style={{ left: `calc(${(currentTime / (duration - 0)) * (100 - 0.25)}% + 0.25em / 2)` }} />
                        <input 
                            className="slider-input-2" 
                            type="range" 
                            min={0}
                            max={duration}
                            value={currentTime}
                            onChange={handleSeek}
                            onMouseDown={handleSeekStart}
                            onMouseUp={handleSeekEnd}
                            onTouchStart={handleSeekStart}
                            onTouchEnd={handleSeekEnd} 
                        />
                    </div>
                </div>
            </div>
            <div className="durationCount ms-3">
                {formatTime(duration)}
            </div>
        </div>
    )
};

export default AudioDuration;