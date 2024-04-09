import React from 'react';
import FormCategoryOption from './FormCategoryOption';

const EditorForm = ({ 
    handleSubmit, image, setImage, title, setTitle, 
    category, setCategory, soundLink, setSoundLink, editing, listOfCategories }) => {
    

    const btnText = editing ? "Save changes" : "Add Project";

    return (
        <form id='vinyl-record-editor-form' onSubmit = { handleSubmit }>
            <div className="mb-3">
                <label 
                    htmlFor="vinyl-img" 
                    className="col-form-label"
                >
                    Vinyl image link:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="vinyl-img"
                    value = { image }
                    required = { true }
                    onChange = { (e) => setImage(e.target.value) } 
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="vinyl-title" 
                    className="col-form-label"
                >
                    Vinyl title:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="vinyl-title"
                    value = { title }
                    required = { true }
                    onChange = { (e) => setTitle(e.target.value) } 
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="vinyl-category" 
                    className="col-form-label"
                >
                    Select music category:
                </label>
                <select 
                    id='vinyl-category' 
                    className="form-select form-select-lg mb-3" 
                    aria-label="Large select example"
                    value = { category }
                    required = { true }
                    onChange = { (e) => setCategory(e.target.value) }
                >
                    { editing && <option selected>{ category }</option>}

                    { listOfCategories.slice(1).map((item) => <FormCategoryOption 
                        key = { item._id }
                        musicCategory = { item.musicCategory }
                        category = { category } 
                    />)}
                </select>
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="vinyl-sound" 
                    className="col-form-label"
                >
                    Record sound link:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="vinyl-sound"
                    value = { soundLink }
                    required = { true }
                    onChange = { (e) => setSoundLink(e.target.value) } 
                />
            </div>
            <button type="submit" className="btn btn-primary">
                { btnText }
            </button>
        </form>
    )
};

export default EditorForm;