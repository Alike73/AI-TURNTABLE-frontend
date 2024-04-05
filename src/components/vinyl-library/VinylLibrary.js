import React, { useState } from 'react'
import RecordCard from './RecordCard';
import SearchInput from '../filter/SearchInput';
import RecordsFilter from '../filter/RecordsFilter';
import { useSelector } from 'react-redux';
import { getAdmin } from '../../redux/AdminSecureSlice';
import OpenEditorBtn from '../hero/OpenEditorBtn';

const VinylLibrary = ({ sounds }) => {

    const isAdmin = useSelector(getAdmin);
    const [activeRecordId, setActiveRecordId] = useState(null); // State to track active record ID

    const handleSetActiveRecord = (recordId) => {
        setActiveRecordId(recordId);
    };

    return (
        <div className="vinyl_library py-5">
            <div className="container-fluid">
                <div className="search_input_box mx-auto">
                    <SearchInput />
                </div>
                <RecordsFilter />
                { isAdmin && <OpenEditorBtn /> }
                <div className="row justify-content-center gap-3 py-5 px-3 row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-5">
                    { sounds.map((item) => <RecordCard 
                        key = { item._id } 
                        vinylCover = { item.image } 
                        title = { item.title } 
                        soundLink = { item.soundLink }
                        recordId={item._id}
                        isActive={activeRecordId === item._id} // Pass isActive prop
                        setActiveRecord={handleSetActiveRecord} // Pass setActiveRecord function 
                        // category = { item.category }
                    />)}
                </div>
            </div>
        </div>
    )
};

export default VinylLibrary;