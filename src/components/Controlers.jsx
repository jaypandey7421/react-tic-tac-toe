import React from 'react'


export default function Controlers({setGameHistory, setCurrentMove, length, currentMove, setTurn}) {

  function restart(){
    setCurrentMove(0);
    setGameHistory([Array(9).fill(null)]);
  }

  function moveBack(){
    if(currentMove === 0) return
    setCurrentMove(pre => pre - 1);
    setTurn(pre => (pre === 'X'? 'O': 'X'))
  }

  function moveForward(){
    if(currentMove + 1 < length){
      setCurrentMove(pre => pre + 1);
      setTurn(pre => (pre === 'X'? 'O': 'X'))
    }
  }

  return (
    <div className="controlers">
        <hr />
        <button className='control-btn' onClick={moveBack}><i class="fa-solid fa-backward"></i></button>
        <button className='control-btn' onClick={restart}><i class="fa-solid fa-arrow-rotate-right"></i></button>
        <button className='control-btn' onClick={moveForward}><i class="fa-solid fa-forward"></i></button>
    </div>
  )
}
