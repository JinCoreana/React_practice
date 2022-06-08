import React from 'react'

const InputCom = (handleSubmit:any, inputRef:string,color:string, setColor:any) => {
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor='color' > Color</label>
    <input type="text" placeholder='Add color name' ref={inputRef} value={color} onChange={(e)=>setColor(e.target.value)} />
  </form>
  )
}

export default InputCom