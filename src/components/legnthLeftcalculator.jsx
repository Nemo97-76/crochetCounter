import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input,  Tooltip } from '@mui/joy';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import "./legnthLeftcalculator.css"
import StraightenSharpIcon from '@mui/icons-material/StraightenSharp';

const LengthLeftCalculator=()=>{
const navigate = useNavigate();
const [fullLength, setFullLength]=useState(0);
const [fullWeight, setFullWeight]=useState(0);
const [weightRemaining, setWeightRemaining]=useState(0);
const [lengthLeft, setLengthLeft]=useState(0);

const calculate=()=>{
    const lengthLeft = (fullLength * weightRemaining) / fullWeight;
    setLengthLeft(lengthLeft);
}

const reset=()=>{
    setFullLength(0);
    setFullWeight(0);
    setWeightRemaining(0);
    setLengthLeft(0);
}

return(
<div className='lengthLeftCalculator'>
<h1>
Length Left Calculator
</h1>
<div className='container'>
    <div>
        <label>
        full skein length (in meters):
    </label>
    <Input className='calculatorInput' slotProps={{
        input:{
            min:0,
        }
    }} type="number" value={fullLength?fullLength:""} onChange={()=>setFullLength(Number(event.target.value))} placeholder='e.g. 200'/>
    </div>
<div>
<label>
        full skein weight (in grams):
    </label>
    <Input
     className='calculatorInput' slotProps={{
        input:{
            min:0,
            max:100,
        }
    }} type="number" value={fullWeight?fullWeight:""} onChange={()=>setFullWeight(Number(event.target.value))} placeholder='e.g. 100'/>
</div>

<div>
    <label>
        weight remaining (in grams):
    </label>
    
    <Input className='calculatorInput' slotProps={{
        input:{
            min:0,
            max:100,
        }
    }}
    type="number" value={
        weightRemaining?weightRemaining:''
    } onChange={()=>setWeightRemaining(Number(event.target.value))} placeholder='e.g. 40'/>
    </div>   
    <Button className='calculate' endDecorator={<StraightenSharpIcon sx={{fontSize:"24px"}}/>} onClick={calculate}> 
      Calculate{" "} 
    </Button>
    <Button onClick={reset} className='resetCalculater calculate'>reset</Button>
    <div className='resultSection'>
    the remaining length is : {lengthLeft} meters
</div>


</div>
<Tooltip title="ChangeCalculator" placement="bottom" arrow={true}>
 <Button className='changeBTN2' onClick={() => navigate('/')}><ChangeCircleOutlinedIcon sx={{fontSize:"45px"}}/></Button>
</Tooltip>
</div>
    )
}
export default LengthLeftCalculator;