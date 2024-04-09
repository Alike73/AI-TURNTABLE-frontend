import { useSelector } from 'react-redux';
import { getAdmin } from '../../redux/AdminSecureSlice';
import Swal from 'sweetalert2';
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";

const CategoryBtn = ({ itemIndex, musicCategory, setMusicCategory, setEditingMusicCategory, updatingInCategoryInput, deleteMusicCategory }) => {

    const isAdmin = useSelector(getAdmin);

    const handleCategoryDelete = () => {
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
            deleteMusicCategory();
            Swal.fire({
            title: "Deleted!",
            text: "Your music category has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1700
            });
        }
        });
    }

    const handleOpenCategoryEditor = () => {
        setMusicCategory("")
        setEditingMusicCategory(false)
    }

    return (
        <div>
            <div className="category_button_wrapper">
                <button 
                    className="category_button" 
                    type="button"
                >
                    { musicCategory }
                </button>
                <div className="category_indicator" />
            </div>
                { isAdmin && 
                    <div className={ `d-flex flex-column border category_control_wrapper ${ itemIndex === 1 ? "invisible" : "visible" }` }>
                        <div className="d-flex justify-content-around pt-3 mb-2">
                            <FaRegEdit className="fs-5 text-success c-icon" data-bs-toggle="modal" data-bs-target="#categoryEditor" onClick={ updatingInCategoryInput } />
                            <FaRegTrashCan className="fs-5 text-danger c-icon" onClick={ handleCategoryDelete } />
                        </div>
                        <div className="d-flex justify-content-center py-2">
                            <IoMdAddCircleOutline 
                                className="fs-5 text-primary c-icon" 
                                data-bs-toggle="modal" 
                                data-bs-target="#categoryEditor"
                                onClick={ handleOpenCategoryEditor } 
                            />
                        </div>
                    </div>
                }
            {/* <div className={ `d-flex flex-column border category_control_wrapper ${ itemIndex === 1 ? "invisible" : "visible" }` }>
                <div className="d-flex justify-content-around pt-3 mb-2">
                    <FaRegEdit className="fs-5 text-success c-icon" data-bs-toggle="modal" data-bs-target="#categoryEditor" onClick={ updatingInCategoryInput } />
                    <FaRegTrashCan className="fs-5 text-danger c-icon" onClick={ handleCategoryDelete } />
                </div>
                <div className="d-flex justify-content-center py-2">
                    <IoMdAddCircleOutline className="fs-5 text-primary c-icon" data-bs-toggle="modal" data-bs-target="#categoryEditor" />
                </div>
            </div> */}
        </div>
    )
};

export default CategoryBtn;