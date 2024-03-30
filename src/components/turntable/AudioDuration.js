import React from 'react'

const AudioDuration = () => {

    return (
        <div className="audio-duration">
            <div className="durationCount me-3">
            <span className="active_indicator" />
            0:00
            </div>
            <div className="slider-wrapper-2">
                <div className="slider-container-2">
                    <div className="slider-track-2">
                        <div className="slider-track-fill-2"></div>
                        <div className="slider-thumb-2"></div>
                        <input className="slider-input-2" type="range" min="0" max="350.856" value="70" />
                    </div>
                </div>
            </div>
            <div className="durationCount ms-3">5:50</div>
        </div>
    )
};

export default AudioDuration;