

const FormRecordTitle = ({ title, setTitle }) => {

    return (
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
    )
};

export default FormRecordTitle;