import React from 'react'

export default function Control({restart, setCellVal, setMoveCount, moveCount}) {
  function restartGame(){
    restart( setCellVal, setMoveCount);
  }

  // function moveBack(){
  //   if(moveCount ===0) return;
  //   setMoveCount((pre)=> pre -1)
  // }

  return (
    <div className='controls'>
        <button className='control-btn' >←</button>
        <button className='control-btn' >→</button>
        <button className='control-btn' onClick={restartGame} >R</button>
    </div>
  );
}
