import React from 'react';
import { IoPlayOutline } from "react-icons/io5";

const PlayRecordBtn = () => {

    return (
        <button 
            type="button" 
            className="btn btn-sm play_record_btn"
        >
            <IoPlayOutline className="fs-3 btn_ico" />
        </button>
    )
};

export default PlayRecordBtn;