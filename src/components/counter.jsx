import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./counter.css"
import { Button, Tooltip } from '@mui/joy';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
const Counter=()=>{
  const width=window.innerWidth;
  
//local storage
const navigate = useNavigate();
useEffect(() => {
  const SavedRows=localStorage.getItem('rows');
  const SavedStitches=localStorage.getItem('stitches');
if(SavedRows){
  setRows(parseInt(SavedRows));
}
if(SavedStitches){
  setStitches(parseInt(SavedStitches));
}}, [])

//stitches
var [stitches, setStitches] = useState(0);
const openPromptStitches=()=>{
  const promptValue = prompt('Enter a number');
  if(promptValue){
    setStitches(parseInt(promptValue));
  }
}
const openPromptStitchesToAdd=()=>{
  const promptValue = prompt('Enter a number');
  if(promptValue){
    setStitches(stitches+parseInt(promptValue));
  }
}
useEffect(() => {
  localStorage.setItem('stitches',stitches);
}, [stitches])

//rows
var [rows, setRows] = useState(0);
const openPromptRowsToAdd=()=>{
  const promptValue = prompt('Enter a number');
  if(promptValue){
    setRows(rows+parseInt(promptValue));
  }
}
useEffect(() => {
  localStorage.setItem('rows',rows);
}, [rows])
const openPromptRows=()=>{
  const promptValue = prompt('Enter a number');
  if(promptValue){
    setRows(parseInt(promptValue));
  }
}


  return (
    <>
    <div className="Counter">
        <h1 className="counter-title">Counter</h1>
<div className='counter-container'>
  <div className={width>600?"leftCounter rows":" rows"}>
<h2>rows done</h2>
<div className='count'>
  {rows}
</div>

<button className='buttonCounter' onClick={()=>setRows(rows+1)}>increase one</button>
<button className='buttonCounter prompt' onClick={openPromptRows}>set number</button>
<button className='buttonCounter AddPrompt' onClick={openPromptRowsToAdd}>Add</button>
<button className='reset resetrows' onClick={()=>setRows(0)}>reset</button>

  </div>

  {/* stitches */}
  
  <div className='stitches'>
  <h2>stitches</h2>
<div className='count'>
  {stitches}
</div>


<button className='buttonCounter' onClick={()=>setStitches(stitches+1)}>increase one</button>
<button className='buttonCounter prompt' onClick={openPromptStitches}>set number</button>
<button className='buttonCounter AddPrompt' onClick={openPromptStitchesToAdd}>Add</button>


<button className='reset resetst' onClick={()=>setStitches(0)}>reset</button>

  </div>
</div>
<Tooltip title="Change Calculator" placement="bottom" arrow={true} className="changeTooltip">
 <Button className='changeBTN' onClick={() => navigate('/lengthLeftCalculator')}><ChangeCircleOutlinedIcon sx={{fontSize:"45px"}}/></Button>
</Tooltip>
</div>
     
    </>
  )
}

export default Counter;