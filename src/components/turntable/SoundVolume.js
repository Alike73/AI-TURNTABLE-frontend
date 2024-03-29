import React from 'react'

const SoundVolume = () => {

    return (
        <div className="soundVolumeBox">
            <span className="soundVolumeText">
                VOL
                <i className="bi bi-volume-up fs-3"></i>
            </span>
            <div className="slider-wrapper">
                <div className="slider-container">
                    <div className="slider-track">
                        <div className="slider-track-fill"></div>
                        <div className="slider-thumb"></div>
                        <input className="slider-input" type="range" min="0" max="100" value="100" />
                    </div>
                </div>
            </div>
            <span className="soundVolume text-center ms-3">
            100
            </span>
        </div>
    )
};

export default SoundVolume;