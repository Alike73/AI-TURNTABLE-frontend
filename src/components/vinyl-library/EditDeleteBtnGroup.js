import React from 'react';
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const EditDeleteBtnGroup = () => {
    
    return (
        <div className="btn_group">
            <button 
                type="button" 
                className="btn btn-sm me-3"
            >
                <FaRegEdit className='fs-3 btn_ico' />
            </button>
            <button 
                type="button" 
                className="btn btn-sm"
            >
                <BsTrash3 className='fs-3 btn_ico' />
            </button>
        </div>
    )
};

export default EditDeleteBtnGroup;