

const FormSubmitBtn = ({ editing }) => {

    const btnText = editing ? "Save changes" : "Add Project";

    return (
        <button type="submit" className="btn btn-primary">
            { btnText }
        </button>
    )
};

export default FormSubmitBtn;