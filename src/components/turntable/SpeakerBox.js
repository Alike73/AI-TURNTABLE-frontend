import brandLogo from '../../assets/images/marshall-2.png';

const SpeakerBox = () => {

    return (
        <div className="speakerBox p-3">
            <div className="speaker_wrapper">
                <div className="speaker speaker-play-shadow mb-4" />
            </div>
            <div className='px-3'>
                <img className='d-block mx-lg-auto img-fluid' src={ brandLogo } alt="marshall brand logo" />
            </div>
            <div className="speaker_wrapper">
                <div className="speaker speaker-play-shadow mb-4" />
            </div>
        </div>
    )
};

export default SpeakerBox;