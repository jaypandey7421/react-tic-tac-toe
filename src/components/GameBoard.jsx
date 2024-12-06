import React, { useState } from 'react'
import CellBoard from './CellBoard'
import Control from './Control';

export default function GameBoard() {
    const [celVal, setCellVal] = useState([Array(9).fill(null)]);
    const currentVal = celVal[celVal.length -1];
    const [turn , setTurn] = useState('X');

    function handleClick(i){
        if(currentVal[i] || winner(currentVal)) return;

        const swapVal = currentVal.slice();
        if(turn === 'X'){
            swapVal[i] = 'X';
            setCellVal([...celVal, swapVal]);
            setTurn('O');
        }else{
            swapVal[i] = 'O';
            setCellVal([...celVal, swapVal]);
            setTurn('X');
        }
    }

   const stats = winner(currentVal);
   let message;
   if(stats){
        message = `Winner is: ${stats}`;
   }else{
        message = `Turn: ${turn}`;
   }

  return (
    <div className='game-board'>
        <h1>{message}</h1>
        <CellBoard value={currentVal} handleClick={handleClick} />
        <Control />
    </div>
  );
}

function winner(currentVal){
    const list = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i=0; i< list.length; i++){
        const [a,b,c] = list[i];
        if(currentVal[a] && currentVal[a]===currentVal[b] && currentVal[a]===currentVal[c]){
            //console.log(`Winner is: ${currentVal[a]}`);
            return currentVal[a];
        }
    }

    return null;
}