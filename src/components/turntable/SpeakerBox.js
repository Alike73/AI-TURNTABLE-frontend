import { useSelector } from 'react-redux';
import { getIsPlayingAudio } from '../../redux/AudioSlice';
import brandLogo from '../../assets/images/marshall-3.png';

const SpeakerBox = () => {

    const isPlaying = useSelector(getIsPlayingAudio);

    return (
        <div className="speakerBox py-3 px-4">
            <div className="speaker_wrapper">
                <div className={ `speaker mb-4 ${ isPlaying ? "active" : "" }` } />
            </div>
            <div className='px-3'>
                <img className='d-block mx-lg-auto img-fluid brand-logo' src={ brandLogo } alt="marshall brand logo" />
            </div>
            <div className="speaker_wrapper">
                <div className={ `speaker mb-4 ${ isPlaying ? "active" : "" }` } />
            </div>
        </div>
    )
};

export default SpeakerBox;