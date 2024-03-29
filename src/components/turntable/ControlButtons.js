import { IoPlayOutline } from "react-icons/io5";
import { IoStopOutline } from "react-icons/io5";

import React from 'react'

const ControlButtons = () => {

    return (
        <div className='control-buttons-group'>
            <button className="button">
                <IoPlayOutline className="fs-5" />
            </button>
            <button className="button">
                <IoStopOutline className="fs-5" />
            </button>
        </div>
    )
};

export default ControlButtons;