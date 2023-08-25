import React from 'react';
import './Dropdown.scss';

const points = ["10 points", "20 points", "40 points", "50 points"];

const Dropdown = () => {
    return (
        <div className='dropDown'>
            <h3 className='dropDown__heading'>Rewards</h3>
            <div className='dropDown__menu'>
                <select value="points" name="points" id="points" className="dropDown__value">
                    <option>Please select</option>
                        {
                            points.map((el)=> {
                                return <option>{el}</option>
                            }
                            
                            )
                        }
                   <option></option>
                </select>
            </div>

        </div>
    );
};

export default Dropdown;