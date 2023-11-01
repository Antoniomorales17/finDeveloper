import React from "react";
import {faqs} from "./../../assets/data/faqs"
import FaqItems from "./FaqItems";

const FaqsList = () => {
    return (
        <ul className="mt-[38px]">
            {faqs.map((item, index) => {
        return (
            <li key={index}>
                <FaqItems item={item} key={index} />
            </li>
        );
                 
                    
                
            })}
        </ul>
    )
}

export default FaqsList;