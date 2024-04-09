import React from 'react';

const FormCategoryOption = ({ musicCategory, category }) => {

    return (
        <option 
            className={ category === musicCategory ? "d-none" : "d-block" }
        >
            { musicCategory }
        </option>
    )
};

export default FormCategoryOption;