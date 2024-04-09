import React from 'react';
import EditorForm from './EditorForm';

const Editor = ({ 
    handleSubmit, image, setImage, title, setTitle, 
    category, setCategory, soundLink, setSoundLink, 
    editing, listOfCategories }) => {

    return (
        <div className="modal fade" id="modalEditor" tabIndex="-1" aria-labelledby="modalEditorLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title fs-5" id="modalEditorLabel">
                            Editor
                        </h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <EditorForm
                            handleSubmit = { handleSubmit } 
                            image = { image }
                            setImage = { setImage }
                            title = { title }
                            setTitle = { setTitle }
                            category =  { category }
                            setCategory = { setCategory }
                            soundLink = { soundLink }
                            setSoundLink= { setSoundLink }
                            editing = { editing }
                            listOfCategories = { listOfCategories }
                        />
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

export default Editor;