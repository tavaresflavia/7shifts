import React from 'react';
import './Dropdown.scss';
import { useState } from 'react';
import arrow from '../../assets/images/arrowdown.svg'

const points = ["5 points", "10 points", "15 points", "20 points"];


const Dropdown = () => {
    const [options, setOptions] = useState(false)
    const [value, setValue ] = useState("Points");
    const [focus, setFocus] = useState(false)

    const handleOptions = () => {
        setOptions(true);
        setFocus(true);
    }

    const selectOption = (e) =>{
        setOptions(false);
        setValue(e.target.value);
        setFocus(false);

    }

    return (
        <div className='dropDown'>
            <h3 className='dropDown__heading'>Rewards</h3>
            <div className='dropDown__menu'>
                <div className={"dropDown__value" + (focus? " dropDown__value--focus":"")} onClick={handleOptions}> <span className='points'>{value} </span><img src={arrow}/>
        
                </div>
             <div className= {"dropDown__options" + (options ? "": " hidden")}> 
                {
                            points.map((el)=> {
                                return <label className='check-input'><input value={el}  type="checkbox" onClick ={selectOption} checked= {value === el ? true:false}/> <span className='option-title'>{el}</span></label>
                            }
                            
                            )
                        }</div>
            </div>

        </div>
    );
};

export default Dropdown;