import React from 'react';
import { useSelector } from 'react-redux';
import { getAdmin } from '../../redux/AdminSecureSlice';
import vinylRecord from '../../assets/images/vinylRecordDonat.png';
import EditDeleteBtnGroup from './EditDeleteBtnGroup';
import melodyLogo from '../../assets/images/melody.png';
import SetTheRecordBtn from './SetTheRecordBtn';

const RecordCard = ({ vinylCover, title}) => {

    const isAdmin = useSelector(getAdmin);

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
                                <SetTheRecordBtn />
                                <img className='card_melody_logo' src={ melodyLogo } alt="melody logo" />
                                { isAdmin && <EditDeleteBtnGroup /> }
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default RecordCard;