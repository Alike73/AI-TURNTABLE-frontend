import React from 'react';
import Swal from 'sweetalert2';
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const EditDeleteBtnGroup = ({ updatingInInput, deleteSound }) => {

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            deleteSound();
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1700
            });
        }
        });
    }
    
    return (
        <div className="btn_group">
            <button 
                type="button" 
                className="btn btn-sm me-3"
                data-bs-toggle="modal" 
                data-bs-target="#modalEditor"
                onClick={ updatingInInput }
            >
                <FaRegEdit className='fs-3 btn_ico' />
            </button>
            <button 
                type="button" 
                className="btn btn-sm"
                onClick={ handleDelete }
            >
                <BsTrash3 className='fs-3 btn_ico' />
            </button>
        </div>
    )
};

export default EditDeleteBtnGroup;