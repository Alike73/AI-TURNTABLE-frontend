import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getShowOpenFaqBtn, setShowOpenFaqBtn } from '../../redux/FAQSlice';

const OpenFAQsBtn = () => {


    const showOpenFaqBtn = useSelector(getShowOpenFaqBtn);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                dispatch(setShowOpenFaqBtn(true))
            } else {
                dispatch(setShowOpenFaqBtn(false))
            }
        });
    }, [dispatch]);

    return (
        <div className='faqs_open_btn_wrapper'>
            { showOpenFaqBtn && 
                <button 
                    className="btn btn-sm btn-secondary faqs_open_btn" 
                    type="button"
                    data-bs-toggle="modal" 
                    data-bs-target="#faqsModal"
                >
                    FAQs
                </button>
            }
        </div>
    )
};

export default OpenFAQsBtn;