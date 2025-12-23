import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"
const Counter=()=>{
const nav=useNavigate();
//local storage
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

//reset
const resetCounters=()=>{
  setRows(0);
  setStitches(0);
}
  return (
    <>
    <div className="App">
        <h1>Counter</h1>
<div className='container'>
  <div className='rows'>
<h2>rows done</h2>
<div className='count'>
  {rows}
</div>

<button className='button' onClick={()=>setRows(rows+1)}>increase one</button>
<button className='button prompt' onClick={openPromptRows}>set number</button>
<button className='button AddPrompt' onClick={openPromptRowsToAdd}>Add</button>

  </div>

  {/* stitches */}
  
  <div className='stitches'>
  <h2>stitches</h2>
<div className='count'>
  {stitches}
</div>


<button className='button' onClick={()=>setStitches(stitches+1)}>increase one</button>
<button className='button prompt' onClick={openPromptStitches}>set number</button>
<button className='button AddPrompt' onClick={openPromptStitchesToAdd}>Add</button>
  </div>
</div>
<button className='reset' onClick={resetCounters}>reset</button>


     <button className='changeBTN'
    onClick={nav('/lengthLeftCalculator')}>change calculator</button>
</div>
     
    </>
  )
}
export default Counter;