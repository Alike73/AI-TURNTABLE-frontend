import React from 'react';
import FormImgLink from './FormImgLink';
import FormRecordTitle from './FormRecordTitle';
import FormRecordCategory from './FormRecordCategory';
import FormSoundLink from './FormSoundLink';
import FormSubmitBtn from './FormSubmitBtn';

const EditorForm = ({ 
    handleSubmit, image, setImage, title, setTitle, 
    category, setCategory, soundLink, setSoundLink, editing, listOfCategories }) => {
    

    return (
        <form id='vinyl-record-editor-form' onSubmit = { handleSubmit }>
            <FormImgLink 
                image = { image } 
                setImage = { setImage } 
            />
            <FormRecordTitle 
                title = { title } 
                setTitle = { setTitle } 
            />
            <FormRecordCategory 
                category = { category } 
                setCategory = { setCategory } 
                editing = { editing } 
                listOfCategories = { listOfCategories } 
            />
            <FormSoundLink 
                soundLink = { soundLink } 
                setSoundLink = { setSoundLink } 
            />
            <FormSubmitBtn editing = { editing } />
        </form>
    )
};

export default EditorForm;