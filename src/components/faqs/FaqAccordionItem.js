import React from 'react';

const FaqAccordionItem = ({ order_number, question, answer, btn_aria_expanded, data_base_target_id, class_name }) => {

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button 
                    className="accordion-button fw-bold" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target = { `#${data_base_target_id}`} 
                    aria-expanded = { btn_aria_expanded } 
                    aria-controls = { data_base_target_id }
                    >
                    { order_number }. { question }
                </button>
            </h2>
            <div id = { data_base_target_id } className = { class_name }>
                <div className="accordion-body lead fs-6">
                    { answer }
                </div>
            </div>
        </div>
    )
};

export default FaqAccordionItem;