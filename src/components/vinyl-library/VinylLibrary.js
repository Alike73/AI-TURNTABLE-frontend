import React, { useState } from 'react'
import RecordCard from './RecordCard';
import SearchInput from '../filter/SearchInput';
import RecordsFilter from '../filter/RecordsFilter';
import { useSelector } from 'react-redux';
import { getAdmin } from '../../redux/AdminSecureSlice';
import OpenEditorBtn from '../hero/OpenEditorBtn';
import { deleteSound } from '../../api/FetchRecords';
import { getSearchRecordTerm, getVinylCategory } from '../../redux/VinylRecordSlice';
import NoSuchRecordText from './NoSuchRecordText';

const VinylLibrary = ({ 
    sounds, setSounds, audioRef, updatingInInput, 
    setImage, setTitle, setCategory, setSoundLink, 
    setEditing, listOfCategories, setListOfCategories }) => {

    const isAdmin = useSelector(getAdmin);
    const [activeRecordId, setActiveRecordId] = useState(null); // State to track active record ID
    const vinylCategory = useSelector(getVinylCategory);
    const searchRecordTerm = useSelector(getSearchRecordTerm);

    const handleSetActiveRecord = (recordId) => {
        setActiveRecordId(recordId);
    };

    // Filtered projects based on selected category and search term
    const filteredRecords = sounds
        .filter((item) => {
            if (vinylCategory === 'ALL TYPES') return true;
            return vinylCategory === item.category;
        })
        .filter((project) => {
            if (searchRecordTerm === '') return true;
            return project.title.toLowerCase().includes(searchRecordTerm.toLowerCase());
        });

    return (
        <div className="vinyl_library py-5">
            <div className="container-fluid">
                <div className="search_input_box mx-auto">
                    <SearchInput />
                </div>
                <RecordsFilter
                    listOfCategories = { listOfCategories }
                    setListOfCategories = { setListOfCategories }
                />
                { isAdmin && <OpenEditorBtn 
                    setImage = { setImage }
                    setTitle = { setTitle }
                    setCategory = { setCategory }
                    setSoundLink= { setSoundLink }
                    setEditing = { setEditing }
                    setListOfCategories = { setListOfCategories }
                /> }
                <div className="row justify-content-center gap-3 py-5 px-3 row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-5">
                    {/* { filteredRecords.map((item) => <RecordCard 
                        key = { item._id } 
                        vinylCover = { item.image } 
                        title = { item.title } 
                        soundLink = { item.soundLink }
                        recordId={ item._id }
                        isActive={ activeRecordId === item._id } // Pass isActive prop
                        setActiveRecord={ handleSetActiveRecord } // Pass setActiveRecord function
                        audioRef = { audioRef }
                        updatingInInput = {() => updatingInInput(item._id, item.image, item.title, item.category, item.soundLink)}
                        deleteSound={() => deleteSound(item._id, setSounds)}
                        // category = { item.category }
                    />)} */}

                    { filteredRecords.length === 0 
                        ? (<NoSuchRecordText />) 
                        : (filteredRecords.map((item) => <RecordCard
                        key = { item._id } 
                        vinylCover = { item.image } 
                        title = { item.title } 
                        soundLink = { item.soundLink }
                        recordId={ item._id }
                        isActive={ activeRecordId === item._id } // Pass isActive prop
                        setActiveRecord={ handleSetActiveRecord } // Pass setActiveRecord function
                        audioRef = { audioRef }
                        updatingInInput = {() => updatingInInput(item._id, item.image, item.title, item.category, item.soundLink)}
                        deleteSound={() => deleteSound(item._id, setSounds)}
                    />))}
                </div>
            </div>
        </div>
    )
};

export default VinylLibrary;