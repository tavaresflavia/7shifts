import React from 'react';
import './CalendarShift.scss'
import pencil from "../../assets/images/pencil.svg"


const CalendarShift = ({points, shift}) => {
    return (
        <div className='calendshift'>
            <div className='calendshift__sideBar'>.</div>
            <div className='calendshift__main'>
                <div className='calendshift__info'>
                    <p className='calendshift__text'>{shift}</p>
                    <img className='calendshift__img' src={pencil}/>
                </div>
                <div className='calendshift__points'>
                {points}
                </div>
            </div>


        </div>
    );
};

export default CalendarShift;