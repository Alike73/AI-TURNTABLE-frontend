import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminFullName, getAdminPass } from '../../redux/AdminSecureSlice';
import alienVinyl from '../../assets/images/vinylRecord.png';
import Equalizer from './Equalizer';
import dividerRound from '../../assets/images/divider-round-bottom.svg';
import { getHeroPlayer, getIsPlayingAudio } from '../../redux/AudioSlice';
import HeroVinylControls from './HeroVinylControls';
import HeroVinylControlsBtnGroup from './HeroVinylControlsBtnGroup';
import HeroControlsTiming from './HeroControlsTiming';
import handlePassword from '../../zxy-utils/zxyUtils';


const Hero = ({ audioRef, handlePlayPause, handleStop }) => {

    const adminFullName = useSelector(getAdminFullName);
    const adminPass = useSelector(getAdminPass);
    const dispatch = useDispatch();
    const isPlaying = useSelector(getIsPlayingAudio);
    const showHeroPlayer = useSelector(getHeroPlayer);

    return (
        <div className='hero'>
            <Equalizer />
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse justify-content-center g-5 py-5">
                    
                    <div className="col-lg-7 p-0">
                        <h1 className="display-1 fw-bold lh-1 pb-3 mb-5">
                            TurntableTunes
                        </h1>

                        { showHeroPlayer && <HeroControlsTiming /> }
                        { showHeroPlayer && <HeroVinylControls audioRef = { audioRef } /> }
                        { showHeroPlayer && <HeroVinylControlsBtnGroup
                            handlePlayPause = { handlePlayPause } 
                            handleStop = { handleStop }
                        />}

                    </div>
                    <div className="col-10 col-sm-8 col-lg-5 img_container">
                        <img 
                            src={ alienVinyl } 
                            className={ `d-block mx-lg-auto img-fluid alienVinyl ${ isPlaying ? "active" : "" }` } 
                            alt="Bootstrap Themes" 
                            loading="lazy" 
                            onClick={() => handlePassword(adminFullName, adminPass, dispatch)} 
                        />
                    </div>
                </div>
            </div>
            <img className='divider_round' src={ dividerRound } alt="divider" />
        </div>
    )
};

export default Hero;