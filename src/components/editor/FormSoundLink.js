

const FormSoundLink = ({ soundLink, setSoundLink }) => {

    return (
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
    )
};

export default FormSoundLink;