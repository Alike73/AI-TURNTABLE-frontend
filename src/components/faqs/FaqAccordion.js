import React, { useEffect, useState } from 'react';
import FaqAccordionItem from './FaqAccordionItem';
import { getFAQs } from '../../api/FetchFaq';

const FaqAccordion = () => {

    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        getFAQs(setFaqs)
    }, []);

    return (
        <div className="accordion" id="faq-accordion">
            { faqs.map((item) => <FaqAccordionItem 
                key = { item.id }
                order_number = { item.id } 
                question = { item.question }
                answer = { item.answer }
                btn_aria_expanded = { item.btn_aria_expanded }
                data_base_target_id = { item.data_base_target_id }
                class_name = { item.class_name }
            />)}
        </div>
    )
};

export default FaqAccordion;