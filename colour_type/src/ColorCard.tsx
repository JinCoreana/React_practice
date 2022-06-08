import React from 'react'

const ColorCard = (color:any) => {
  return (
    <div id="pallette"className={color}>{color}</div>
     
  )
}

export default ColorCard