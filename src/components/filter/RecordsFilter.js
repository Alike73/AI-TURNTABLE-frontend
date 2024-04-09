import React, { useEffect, useState } from 'react'
import { addMusicCategory, deleteMusicCategory, editMusicCategory, getMusicCategories } from '../../api/FetchMusicCategory';
import Swal from 'sweetalert2';
import CategoryBtn from './CategoryBtn';
import CategoryEditor from '../category-editor/CategoryEditor';

const RecordsFilter = () => {

    const [listOfCategories, setListOfCategories] = useState([]);
    const [musicCategory, setMusicCategory] = useState("");
    const [musicCategoryId, setMusicCategoryId] = useState("");
    const [editingMusicCategory, setEditingMusicCategory] = useState(false);

    useEffect(() => {
        getMusicCategories(setListOfCategories)
    }, []);

    const updatingInCategoryInput = (_id, musicCategory) => {
        setMusicCategoryId(_id)
        setMusicCategory(musicCategory)
        setEditingMusicCategory(true);
    };

    const handleCategorySubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                if(editingMusicCategory) {
                    editMusicCategory(musicCategoryId, musicCategory, setMusicCategory, setEditingMusicCategory, setListOfCategories)
                }
                else {
                    addMusicCategory(musicCategory, setMusicCategory, setListOfCategories)
                }
                Swal.fire({
                    icon: "success",
                    title: "Saved!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    return (
        <div className='d-flex flex-wrap gap-3 justify-content-center py-5'>
            <CategoryEditor 
                musicCategory = { musicCategory } 
                setMusicCategory = { setMusicCategory }
                handleCategorySubmit = { handleCategorySubmit }
                editingMusicCategory = { editingMusicCategory } 
            />

            { listOfCategories.map((item, index) => <CategoryBtn 
                key = { item._id }
                itemIndex = { index + 1 } 
                musicCategory = { item.musicCategory }
                updatingInCategoryInput = {() => updatingInCategoryInput(item._id, item.musicCategory)}
                deleteMusicCategory={() => deleteMusicCategory(item._id, setListOfCategories)} 
            />)}

            {/* <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn />
            <CategoryBtn /> */}
        </div>
    )
};

export default RecordsFilter;