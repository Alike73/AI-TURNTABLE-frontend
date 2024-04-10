import FormCategoryOption from './FormCategoryOption';


const FormRecordCategory = ({ category, setCategory, editing, listOfCategories }) => {

    return (
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
                { editing && <option defaultValue>{ category }</option>}
                { listOfCategories.slice(1).map((item) => <FormCategoryOption 
                    key = { item._id }
                    musicCategory = { item.musicCategory }
                    category = { category } 
                />)}
            </select>
        </div>
    )
};

export default FormRecordCategory;