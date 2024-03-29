import React from 'react'

const AudioDuration = () => {

    return (
        <div className="audio-duration">
            <span className="durationCount me-3">0:00</span>
            <div className="slider-wrapper-2">
                <div className="slider-container-2">
                    <div className="slider-track-2">
                        <div className="slider-track-fill-2"></div>
                        <div className="slider-thumb-2"></div>
                        <input className="slider-input-2" type="range" min="0" max="350.856" value="70" />
                    </div>
                </div>
            </div>
            <span className="durationCount ms-3">5:50</span>
        </div>
    )
};

export default AudioDuration;