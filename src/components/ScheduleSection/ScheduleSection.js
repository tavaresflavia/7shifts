import React from 'react';
import calendarImg from '../../assest/images/calendar_w_weather.png';
import './ScheduleSection.scss';

const ScheduleSection = () => {
    return (
        <div>
            <img className="mainImages" src={calendarImg}/>
        </div>
    );
};

export default ScheduleSection;