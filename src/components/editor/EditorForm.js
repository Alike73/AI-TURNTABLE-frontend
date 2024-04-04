import React from 'react';

const EditorForm = () => {

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
                <label htmlFor="vinyl-category" className="col-form-label">Music category:</label>
                <input type="text" className="form-control" id="vinyl-category" />
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