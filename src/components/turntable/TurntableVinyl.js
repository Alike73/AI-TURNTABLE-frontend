import melodyLogo from '../../assets/images/melody.png';
import defVinylImg from '../../assets/vinylImages/Mozart-modified.png';
import TurntableVinylTitle from './TurntableVinylTitle';

const TurntableVinyl = () => {

    // --->Fixe letter, its come from map of vinyl title 
    // and goes to the TurntableVinyl = ({vinylTitle}) =>
    const vinylTitle = `Track Title Goes Here Track Title Goes`;

    return (
        <div className="vinylOuter">
            <div className="vinylInner">
                <div className="center_pin" />
                <img 
                    className="vinyl_cover" 
                    src={ defVinylImg } 
                    alt="Vinyl cover" 
                />
                <img 
                    className='melodyLogo' 
                    src={ melodyLogo } 
                    alt="melody logo" 
                />
                <TurntableVinylTitle vinylTitle = { vinylTitle } />
            </div>
        </div>
    )
};

export default TurntableVinyl;