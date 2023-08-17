import React from 'react'

import './Square.css'
const Square = ({value,changestate,count}) => {
    function handleClick(){
       changestate(count)
    }
  return (
    <>
    <button onClick={handleClick} className='square'>{value}</button> 
    </>
  )
}

export default Square
