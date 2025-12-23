import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"
const LengthLeftCalculator=()=>{
    const navigate=useNavigate();
    return(
<>
<button className='changeBTN'
    onClick={navigate('/')}>change calculator</button>
</>
    )
}
export default LengthLeftCalculator;