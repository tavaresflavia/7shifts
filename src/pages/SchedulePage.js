import OpenShifts from '../components/OpenShifts/OpenShifts';
import './SchedulePage.scss';
// import NavBar from '../components/NavBar/NavBar'
import pageImg from'../assets/images/schedule-page.png'
// import plusButton from '../assets/images/plusButton.png'
import { useState } from 'react';
import ShiftsModal from '../components/ShiftsModal/ShiftsModal';
import CalendarShift from '../components/CalendarShift/CalendarShift';

const SchedulePage = () => {
    const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    const [modal, setModal ] = useState(false);
    const [day, setDay] = useState("Monday");
    const [showCalender, setShowCalendar ] = useState(false);


    const handleClick = (e) => {
        setModal(true);
        setDay(e.target.id);
        console.log(e.target.id);
    }

    const handleSave = () => {
        setShowCalendar(true);
        setModal(false);

    }

    const handleCancel= () => {
        setShowCalendar(true);
        setModal(false);

    }


   
    return (
        <div>
            <img src = {pageImg} alt="page"/> 
            <div className= "table" >
                <div className= "row1">
                <div className= "row1__big">Open Shifts

                </div>
                {days.map( (el) => {
                    return (<div className= {"row1__small " + (`row1__small--${el} `)} onClick={handleClick} id={el}>

                    </div>)})
                }

                { modal && <ShiftsModal handleSave={handleSave} handleCancel={handleSave}/>}

                {points && <CalendarShift points={points} shift="9am-5pm" />}
               

                </div>
                <div className='role'>No Role


                </div>

                <div className= "row2">
                <div className= "row2__big">

                </div>
                <div className= "row2__small">

                </div>

                </div>
            </div>
       
        </div>
    );
};

export default SchedulePage;