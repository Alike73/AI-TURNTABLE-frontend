import React, { useState } from 'react';

const CategoryEditor = ({ musicCategory, setMusicCategory, handleCategorySubmit, editingMusicCategory }) => {


    const [isCategoryFocused, setCategoryFocused] = useState(false);

    const btnText = editingMusicCategory ? "Save changes" : "Add category";
    const headerTitleText = editingMusicCategory ? "Editing current category" : "Add a NEW category";

    return (
        <div className="modal fade" id="categoryEditor" tabIndex="-1" aria-labelledby="categoryEditorLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5" id="categoryEditorLabel">
                            { headerTitleText }
                        </h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form 
                        id='music-category-form' 
                        onSubmit = { handleCategorySubmit }
                    >
                        <div className="mb-3">
                            <label 
                                htmlFor="music-category" 
                                className={ `col-form-label ${ isCategoryFocused ? "text-primary" : "" }` }
                            >
                                Music category:
                            </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="music-category"
                                value = { musicCategory }
                                required = { true }
                                onChange = { (e) => setMusicCategory(e.target.value) }
                                onFocus={() => setCategoryFocused(true)}
                                onBlur={() => setCategoryFocused(false)}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >
                            { btnText }
                        </button>
                    </form>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default CategoryEditor;