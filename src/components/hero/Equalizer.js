import React from 'react';
import Swal from 'sweetalert2';

const Equalizer = () => {

    const handlePassword = async () => {
        const { value: password } = await Swal.fire({
            title: "Enter your password",
            input: "password",
            inputLabel: "Password",
            inputPlaceholder: "Enter your password",
            inputAttributes: {
            maxlength: "15",
            autocapitalize: "off",
            autocorrect: "off"
            }
        });
        if (password === "K@ch@pon20111") {
            Swal.fire(`Hello Alimzhan: ${password}`);
        }else {
            Swal.fire("Wrong Password!","You entered: "+password,"error");
        }
    };

    return (
        <div id="box" className="animated fadeIn">
            <div id="circle" onClick={ handlePassword }>
                <div id="square">
                    <span id="bar" className="bar2 b1"></span>
                    <span id="bar" className="bar1 b2"></span>
                    <span id="bar" className="bar2 b3"></span>
                    <span id="bar" className="bar1 b4"></span>
                    <span id="bar" className="bar2 b5"></span>
                </div>
            </div>
        </div>
    )
};

export default Equalizer;