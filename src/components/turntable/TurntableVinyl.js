import melodyLogo from '../../assets/images/melody.png';

const TurntableVinyl = () => {

    return (
        <div className="vinylOuter">
            <div className="vinylInner">
                <p className='vinyl_sound_name m-0'>Sound name</p>
                <div className="center_pin" />
                <img 
                    className='melodyLogo' 
                    src={ melodyLogo } 
                    alt="melody logo" 
                />
                <p className='vinyl_author_name m-0'>Author</p>
            </div>
        </div>
    )
};

export default TurntableVinyl;