import React from 'react';
import vinylRecord from '../../assets/images/vinylRecordDonat.png';
import EditDeleteBtnGroup from './EditDeleteBtnGroup';
import PlayRecordBtn from './PlayRecordBtn';
import melodyLogo from '../../assets/images/melody.png';

const RecordCard = ({ vinylCover, title}) => {

    return (
        <div className="col px-3 py-2">
            <div className="record_card_wrapper">
                <div className="record_card">
                    <figure className="caption-shadow">
                        <div className="card_vinyl_img_wrapper">
                            <img className='card_vinyl_outer' src={ vinylRecord  } alt="Vinyl record" />
                            <img className='card_vinyl_inner' src={ vinylCover } alt="Vivaldi vinyl cover" />
                            <div className="record_center_pin" />
                        </div>
                        <figcaption>
                            <span className='p-2'>
                                { title }
                            </span>
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