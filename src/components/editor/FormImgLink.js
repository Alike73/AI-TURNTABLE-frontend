

const FormImgLink = ({ image, setImage }) => {

    return (
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
    )
};

export default FormImgLink;