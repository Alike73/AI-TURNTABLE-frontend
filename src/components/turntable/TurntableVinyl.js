import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFadeVinyl, getVinylCover } from '../../redux/VinylRecordSlice';
import { getIsPlayingAudio, getResetAnimation, setResetAnimation } from '../../redux/AudioSlice';
import melodyLogo from '../../assets/images/melody.png';
import TurntableVinylTitle from './TurntableVinylTitle';

const TurntableVinyl = () => {

    const vinylCover = useSelector(getVinylCover);
    const fadeVinyl = useSelector(getFadeVinyl);
    const isPlaying = useSelector(getIsPlayingAudio);
    const resetAnimation = useSelector(getResetAnimation);
    const dispatch = useDispatch();

    useEffect(() => {
        const resetAnimationTimeout = setTimeout(() => {
            dispatch(setResetAnimation(false));
        }, 500);

        return () => {
            clearTimeout(resetAnimationTimeout);
        };
    }, [resetAnimation, dispatch]);

    // { `vinylOuter ${ fadeVinyl ? "active" : isPlaying ? "rotateVinyl" : "" } ` }

    return (
        <div className={ `vinylOuter ${ fadeVinyl 
            ? "active" 
            : isPlaying 
            ? "vinyl-spin container-fluid" 
            : resetAnimation 
            ? "vinyl-spin vinyl-spin-reset container-fluid" 
            : "vinyl-spin vinyl-spin-paused container-fluid"
            }`}
            
            >
            <div className="vinylInner">
                <div className="center_pin" />
                <img 
                    className="vinyl_cover" 
                    src={ vinylCover } 
                    alt="Vinyl cover" 
                />
                <img 
                    className='melodyLogo' 
                    src={ melodyLogo } 
                    alt="melody logo" 
                />
                <TurntableVinylTitle />
            </div>
        </div>
    )
};

export default TurntableVinyl;