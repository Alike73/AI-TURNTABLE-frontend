import React from 'react';
import { IoPlayOutline } from "react-icons/io5";

const PlayRecordBtn = () => {

    return (
        <button 
            type="button" 
            className="btn play_record_btn"
        >
            <IoPlayOutline className="btn_ico fs-1" />
            <span className='play_record_btn_indicator' />
        </button>
    )
};

export default PlayRecordBtn;