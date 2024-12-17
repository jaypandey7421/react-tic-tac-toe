import React, { useEffect, useState } from 'react'
import Boxes from './Boxes'
import Controlers from './Controlers'

export default function GameBoard() {
  const [gameHistory, setGameHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [turn, setTurn] = useState('X');
  const boardValue = [...gameHistory[currentMove]];

  function handleBoxClick(i){
    if(boardValue[i] != null || decideWinner(boardValue)) return;

    let tempVal = [...gameHistory[currentMove]];
    if(turn === 'X'){
      tempVal[i] = 'X'; 
      setTurn('O')
      setGameHistory([...gameHistory.slice(0, currentMove + 1), tempVal]);
      setCurrentMove(pre => pre += 1);
    }else{
      tempVal[i] = 'O';
      setTurn('X');
      setGameHistory([...gameHistory.slice(0, currentMove + 1), tempVal]);
      setCurrentMove(pre => pre += 1);
    }
  }
 
  const winner = decideWinner(boardValue);
  let status = winner ?  `Winner: ${winner}`: `Turn: ${turn}`;

  return (
    <section className="game-board">
        <h1 className='game-status'>{status}</h1>
        <Boxes boardValue={boardValue} handleBoxClick={handleBoxClick} />
        <Controlers setGameHistory={setGameHistory}
                    setCurrentMove={setCurrentMove}
                    length={gameHistory.length}
                    currentMove={currentMove} />
    </section>
  )
}

function decideWinner(boardValue){
  const winPath = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for(let i =0; i< 8; i++){
    let [a, b, c] = winPath[i];
    if(boardValue[a] && boardValue[a]=== boardValue[b] && boardValue[a]=== boardValue[c]) {
      return boardValue[a];
    }
  }

  return null;
}
