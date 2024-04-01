import React from 'react'
import RecordCard from './RecordCard';
import SearchInput from '../filter/SearchInput';

const VinylLibrary = () => {

    return (
        <div className="vinyl_library py-5">
            <div className="container-fluid">
                <div className="search_input_box mx-auto">
                    <SearchInput />
                </div>
                <div className="row justify-content-center gap-5 py-5 px-3 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-5">
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                    <RecordCard />
                </div>
            </div>
        </div>
    )
};

export default VinylLibrary;