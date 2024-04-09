import React, { useEffect, useState } from 'react';
import { getMusicCategories } from '../../api/FetchMusicCategory';
import FormCategoryOption from './FormCategoryOption';

const EditorForm = () => {

    const [categoriesOptions, setCategoriesOptions] = useState([]);
    useEffect(() => {
        getMusicCategories(setCategoriesOptions)
    }, []);

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="vinyl-img" className="col-form-label">Vinyl image link:</label>
                <input type="text" className="form-control" id="vinyl-img" />
            </div>
            <div className="mb-3">
                <label htmlFor="vinyl-title" className="col-form-label">Vinyl title:</label>
                <input type="text" className="form-control" id="vinyl-title" />
            </div>
            <div className="mb-3">
                <label htmlFor="vinyl-category" className="col-form-label">Select music category:</label>
                <select id='vinyl-category' className="form-select form-select-lg mb-3" aria-label="Large select example">
                    { categoriesOptions.slice(1).map((item) => <FormCategoryOption 
                        key = { item._id }
                        musicCategory = { item.musicCategory } 
                    />)}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="vinyl-sound" className="col-form-label">Record sound link:</label>
                <input type="text" className="form-control" id="vinyl-sound" />
            </div>
            <button type="button" className="btn btn-primary">
                Add new record/ Save changes
            </button>
        </form>
    )
};

export default EditorForm;