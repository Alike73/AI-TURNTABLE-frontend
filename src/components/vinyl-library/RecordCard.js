import React from 'react';
import vinylRecord from '../../assets/images/vinylRecordDonat.png';
import EditDeleteBtnGroup from './EditDeleteBtnGroup';
import PlayRecordBtn from './PlayRecordBtn';
import melodyLogo from '../../assets/images/melody.png';

const RecordCard = () => {

    return (
        <div className="col px-3 py-2">
            <div className="record_card_wrapper">
                <div className="record_card">
                    <figure className="caption-shadow">
                        <img className='card_vinyl_img' src={ vinylRecord  } alt="Vinyl record" width="100%" />
                        <figcaption>
                        Soundtrack name
                        <div className="d-flex justify-content-between align-items-center record_card_btn_group px-3 pb-2">
                            <PlayRecordBtn />
                            <img className='card_melody_logo' src={ melodyLogo } alt="melody logo" />
                            <EditDeleteBtnGroup />
                        </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default RecordCard;