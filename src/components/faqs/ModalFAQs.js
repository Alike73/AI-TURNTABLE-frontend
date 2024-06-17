import React from 'react';
import FaqAccordion from './FaqAccordion';

const ModalFAQs = () => {

    return (
        <div className="modal fade" id="faqsModal" tabIndex="-1" aria-labelledby="faqsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="faqsModalLabel">FAQs</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <FaqAccordion />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ModalFAQs;