import { useSelector } from 'react-redux';
import homeMadeA from '../../assets/images/homeMadeA.png';
import homeMadeC from '../../assets/images/homeMadeC.png';
import { getIsPlayingAudio } from '../../redux/AudioSlice';

const HomeMade = () => {

    const isPlaying = useSelector(getIsPlayingAudio);

    return (
        <img 
            className='homeMade' 
            src={ isPlaying ? homeMadeA : homeMadeC } 
            alt="Home made label" 
        />
    )
};

export default HomeMade;