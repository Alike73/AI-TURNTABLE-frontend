import { useSelector } from 'react-redux';
import melodyLogo from '../../assets/images/melody.png';
import TurntableVinylTitle from './TurntableVinylTitle';
import { getFadeVinyl, getVinylCover } from '../../redux/VinylRecordSlice';

const TurntableVinyl = () => {

    const vinylCover = useSelector(getVinylCover);
    const fadeVinyl = useSelector(getFadeVinyl);

    return (
        <div className={ `vinylOuter ${ fadeVinyl ? "active" : "" } ` }>
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