import React, { useState } from 'react'
import Square from './Square'
import './Boardrow.css'
const Boardrow = ({value,changestate}) => {
  // const [count,setCount]=useState([0,1,2,3,4,5,6,7,8,9])
  
     return (
    <>
    <div className='board-row'>
        <Square value={value[0]} changestate={changestate} count={0}/>
        <Square value={value[1]} changestate={changestate} count={1}/>
        <Square value={value[2]} changestate={changestate} count={2}/>
    </div>
     <div className='board-row'>
      <Square value={value[3]} changestate={changestate} count={3}/>
      <Square value={value[4]} changestate={changestate} count={4}/>
      <Square value={value[5]} changestate={changestate} count={5}/>
    </div>
    <div className='board-row'>
      <Square value={value[6]} changestate={changestate} count={6}/>
      <Square value={value[7]} changestate={changestate} count={7}/>
      <Square value={value[8]} changestate={changestate} count={8}/>
    </div>
    </>
  )
}

export default Boardrow
