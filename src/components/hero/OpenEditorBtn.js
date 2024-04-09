import { RxOpenInNewWindow } from "react-icons/rx";


const OpenEditorBtn = ({ setImage, setTitle, setCategory, setSoundLink, setEditing }) => {

    const handleOpenEditor = () => {
        setImage("")
        setTitle("")
        setCategory("")
        setSoundLink("")
        setEditing(false)
    }

    return (
        <div className="d-flex justify-content-center">
            <button 
                className="btn btn-secondary rounded-pill px-3 open_editor_btn" 
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#modalEditor"
                onClick={ handleOpenEditor }
            >
                <RxOpenInNewWindow className="fs-5" />
                Open editor
            </button>
        </div>
    )
};

export default OpenEditorBtn;