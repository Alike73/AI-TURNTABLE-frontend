import React from 'react'
import RecordCard from './RecordCard';
import SearchInput from '../filter/SearchInput';
import RecordsFilter from '../filter/RecordsFilter';

const VinylLibrary = ({ sounds }) => {

    return (
        <div className="vinyl_library py-5">
            <div className="container-fluid">
                <div className="search_input_box mx-auto">
                    <SearchInput />
                </div>
                <RecordsFilter />
                <div className="row justify-content-center gap-3 py-5 px-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-6">
                    { sounds.map((item) => <RecordCard 
                        key = { item._id } 
                        vinylCover = { item.image } 
                        title = { item.title } 
                        // category = { item.category }
                        // soundLink = { item.soundLink } 
                    />)}
                </div>
            </div>
        </div>
    )
};

export default VinylLibrary;