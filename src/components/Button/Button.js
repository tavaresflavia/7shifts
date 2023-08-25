import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = () => {
    return (
        <div>
            <div className='button'>
                <Link to="/">SAVE</Link>
                
            </div>
            <div className='button'>
                <Link to="/">CANCEL</Link>
            
            </div>
        </div>

    
        
    );
};

export default Button;