/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";


const RatingStar = ({ rating }) => {
    const [halfRate, setHalfRate] = useState(false);
    const [unrate, setUnrate] = useState(0);
    useEffect(() => {
        const beforeDecimal = Math.floor(rating);
        const afterDecimal = rating - beforeDecimal;
        if (afterDecimal > 0) {
            setHalfRate(true);
        }
        if (rating < 5) {
            setUnrate(5 - rating);
        }
    }, [rating]);
    const paragraphs = Array.from({ length: Math.floor(rating) }, (_, index) => (
        <FaStar key={index} />
    ));

    const unratepParagraphs = Array.from({ length: unrate }, (_, index) => (
        <AiOutlineStar key={index} />
    ));

    return (
        <section>
            <div className='flex' >
                {paragraphs}
                {halfRate === true ? <FaRegStarHalfStroke /> : undefined}
                {/* {<FaRegStarHalfStroke /> ? halfRate === true : undefined} */}
                {unratepParagraphs}
            </div>
        </section>
    );
};

export default RatingStar;