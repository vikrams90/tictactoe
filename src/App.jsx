import React from 'react'
import Boardrow from './Boardrow'
import { useState } from 'react'
const App = () => {
  // const [status, setStatus] = useState("")
  let status
  const [value,setValue]=useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);
  
  function checknowinner(arr){
     if(arr[1]&&arr[2]&&arr[3]&&arr[4]&&arr[5]&&arr[6]&&arr[7]&&arr[8]&&arr[0])
      {
        return true
      } else false
  }
  function calculateWinner(arr){
    const lines = [
      [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c])
      {
        return arr[a];
      }
    }
      return null
  }

  function changestate(i){
    if(value[i] || calculateWinner(value)){
      return
    }
    const nextSquares = value.slice();
    if(xIsNext){
    nextSquares[i] = 'X';
    }else{
      nextSquares[i] = "O";
    }

    
    setValue(nextSquares);
    setXIsNext(!xIsNext);
  }
  let btnvalue
  const winner = calculateWinner(value);
  const nowinner = checknowinner(value)
  if (winner||nowinner) {
    if(nowinner&&!winner){
      status = 'Draw ';
    }
    else{
      status = 'Winner: ' + winner;
    }
    btnvalue = 'play again'
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    btnvalue = 'refresh'
  }


  return (
    <>
      <div className='container'>
      <Boardrow changestate={changestate} value={value}/>
      <h1>{status}</h1>
      <button className='refresh' onClick={()=>{ window. location. reload()}}>{btnvalue}</button>
      </div>
    </>
  )
}

export default App
