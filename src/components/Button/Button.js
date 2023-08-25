import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <Link to="/">
            <div className='button'>
                SAVE
            </div>

        </Link>
    );
};

export default Button;