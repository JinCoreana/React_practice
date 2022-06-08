import React from 'react'
import Row from './Row'
import TitleCell from './TitleCell'
const Contents = ({items, isLoading, errorMsg}) => {
    return (
      <div className='table-container'>
              {isLoading && <p>Data is being loaded</p>}    
      {errorMsg && <p>{errorMsg}</p>}
          <table>
          <thead>
     <tr>
 <TitleCell key={items.id} item={items[0]}/>
     </tr>
      </thead>
              <tbody>
        {!isLoading && !errorMsg && items.map((item)=>
       <Row key={item.id} item={item}/>
        )}
    </tbody>
    </table>
    </div>
  )
}

export default Contents