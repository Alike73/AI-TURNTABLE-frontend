import { IoPlayOutline } from "react-icons/io5";
import { IoStopOutline } from "react-icons/io5";

import React from 'react'

const ControlButtons = () => {

    return (
        <div className='control-buttons-group'>
            <div className="button_wrapper">
                <button className="button">
                    <IoPlayOutline className="fs-4 button_ico" />
                </button>
            </div>
            <div className="button_wrapper">
                <button className="button">
                    <IoStopOutline className="fs-4 button_ico" />
                </button>
            </div>
        </div>
    )
};

export default ControlButtons;