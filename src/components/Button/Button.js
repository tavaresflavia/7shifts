import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';
// import saveImg from "../../assest/images/save_button.png"


const Button = ({saveImg}) => {
    return (
        <div>
            <Link to="/">
                <img className="saveButton" src={saveImg}></img>
            </Link>
            
        </div>

    
        
    );
};

export default Button;