import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminPass, setIsAdmin } from '../../redux/AdminSecureSlice';
import Swal from 'sweetalert2';
import alienVinyl from '../../assets/images/vinylRecord.png';
import Equalizer from './Equalizer';
import dividerRound from '../../assets/images/divider-round-bottom.svg';


const Hero = () => {

    const adminPass = useSelector(getAdminPass);
    
    const dispatch = useDispatch();

    const handlePassword = async () => {
        const { value: password } = await Swal.fire({
            title: "Enter your admin password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
            maxlength: "15",
            autocapitalize: "off",
            autocorrect: "off"
            }
        });
        if (password === adminPass) {
            Swal.fire(`Hello Alimzhan: ${password}`);
            dispatch(setIsAdmin(true));
        }else {
            Swal.fire("Wrong Password!","You entered: "+password,"error");
            dispatch(setIsAdmin(false));
        }
    };

    return (
        <div className='hero'>
            <Equalizer />
            <div className="container col-xxl-8 px-4">
                <div className="row flex-lg-row-reverse justify-content-center g-5 py-5">
                    
                    <div className="col-lg-7 p-0">
                        <h1 className="display-1 fw-bold lh-1 mb-3">
                            TurntableTunes
                        </h1>
                        
                        {/* <p className="lead">
                            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                        </p> */}
                        {/* <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div> */}
                    </div>
                    <div className="col-10 col-sm-8 col-lg-5 img_container">
                        <img 
                            src={ alienVinyl } 
                            className="d-block mx-lg-auto img-fluid alienVinyl" 
                            alt="Bootstrap Themes" 
                            loading="lazy" 
                            onClick={ handlePassword } 
                        />
                    </div>
                </div>
            </div>
            <img className='divider_round' src={ dividerRound } alt="divider" />
        </div>
    )
};

export default Hero;