import React from 'react';
import { IoPlayOutline } from "react-icons/io5";

const PlayRecordBtn = () => {

    return (
        <button 
            type="button" 
            className="btn btn-sm play_record_btn"
        >
            <IoPlayOutline className="btn_ico" />
            <span className='play_record_btn_indicator' />
        </button>
    )
};

export default PlayRecordBtn;