import React from 'react'

export default function GameBoxes({boardValue, handleBoxClick}) {

  return (
    <div className="boxes-container">
        <div className="box border-bottom border-right" 
             onClick={()=> handleBoxClick(0)}>
              {boardValue[0]} 
          </div>
        <div className="box border-bottom border-right" 
            onClick={()=> handleBoxClick(1)}> 
              {boardValue[1]}
          </div>
        <div className="box border-bottom" 
            onClick={()=> handleBoxClick(2)}> 
              {boardValue[2]} 
            </div>
        <div className="box border-bottom border-right" 
             onClick={()=> handleBoxClick(3)}> 
              {boardValue[3]} 
            </div>
        <div className="box border-bottom border-right" 
             onClick={()=> handleBoxClick(4)}> 
              {boardValue[4]} 
            </div>
        <div className="box border-bottom" 
            onClick={()=> handleBoxClick(5)}> 
              {boardValue[5]} 
            </div>
        <div className="box border-right" 
            onClick={()=> handleBoxClick(6)}> 
              {boardValue[6]} 
            </div>
        <div className="box border-right" 
            onClick={()=> handleBoxClick(7)}> 
              {boardValue[7]} 
            </div>
        <div className="box" 
            onClick={()=> handleBoxClick(8)}> 
              {boardValue[8]}
          </div>
    </div>
  )
}
