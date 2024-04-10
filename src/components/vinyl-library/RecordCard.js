import React from 'react';
import { useSelector } from 'react-redux';
import { getAdmin } from '../../redux/AdminSecureSlice';
import vinylRecord from '../../assets/images/vinylRecordDonat.png';
import EditDeleteBtnGroup from './EditDeleteBtnGroup';
import melodyLogo from '../../assets/images/melody.png';
import SetTheRecordBtn from './SetTheRecordBtn';
import redLight from '../../assets/images/tt_lighton-withe.png';


const RecordCard = ({ vinylCover, title, soundLink, recordId, isActive, setActiveRecord, audioRef, updatingInInput, deleteSound }) => {

    const isAdmin = useSelector(getAdmin);

    return (
        <div className="col px-3 py-2">
            <div className="record_card_wrapper">
                <div className="record_card">
                    <figure className="caption-shadow">
                        <div className={ `card_vinyl_img_wrapper ${ isActive ? "active" : "" }` }>
                            <img className='card_vinyl_outer' src={ vinylRecord  } alt="Vinyl record" />
                            <img className='card_vinyl_inner' src={ vinylCover } alt="Vivaldi vinyl cover" />
                            <div className="record_center_pin" />
                        </div>
                        { isActive && <img className='red-light' src={ redLight } alt="red light" /> }
                        <figcaption>
                                <div className='vinyl_card_flashlight' />
                            <span className='p-2 vinyl_card_title'>
                                { title }
                            </span>
                            <div className="d-flex justify-content-between align-items-center record_card_btn_group px-3 pb-2">
                                <SetTheRecordBtn 
                                    vinylCover = { vinylCover } 
                                    title = { title } 
                                    soundLink = { soundLink }
                                    recordId = { recordId }
                                    isActive={isActive} // Pass isActive prop
                                    setActiveRecord={setActiveRecord} // Pass setActiveRecord function
                                    audioRef = { audioRef } 
                                />
                                { !isAdmin && <img className='card_melody_logo' src={ melodyLogo } alt="melody logo" />}
                                { isAdmin && <EditDeleteBtnGroup 
                                    updatingInInput = { updatingInInput } 
                                    deleteSound = { deleteSound } 
                                /> }
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
};

export default RecordCard;