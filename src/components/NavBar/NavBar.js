import './NavBar.scss';
import dashboardImg from "../../assets/images/dashboard.png";
import scheduleImg from "../../assets/images/schedule.png";
import scheduleImgClick from "../../assets/images/schedule-click.png";
import teamImg from "../../assets/images/team.png";
import teamImgClick from "../../assets/images/team-click.png";
import hiringImg from "../../assets/images/hiring.png";
import bottomImg from "../../assets/images/nav-bottom.png"
import { useState } from 'react';

const NavBar = () => {

    const [schedule,setSchedule] = useState(false);
    const [team,setTeam] = useState(false);

    const handleSchedule = () =>{
        const newSchedule = !schedule;
        setSchedule(newSchedule);
        if (team === true){
            setTeam(false);
        }
    }

    const handleTeam = () =>{
        const newTeam = !team;
        setTeam(newTeam);
        if (schedule === true){
            setSchedule(false);
        }
    }

    return (
        <div className="nav">
            <img src={dashboardImg} className="nav__dashboard" alt="icon"/> 
            <img className={"nav__schedule-default"  + (schedule ? " hidden":"")} src={scheduleImg} onClick={handleSchedule} alt="icon"/>
            <img className={"nav__schedule " + (schedule ? "":" hidden")} src={scheduleImgClick} alt="icon"/>  

            <img className={"nav__team-default" + (team ? " hidden":"")} src={teamImg}  onClick={handleTeam} alt="icon"/>
            <img className={"nav__team" + (team ? "":" hidden")} src={teamImgClick} alt="icon"/>
            <img className="nav__hiring"  src={hiringImg} alt="icon"/>
            <img className="nav__bottom"  src={bottomImg} alt="icon"/>
        </div>
    );
};  

export default NavBar;