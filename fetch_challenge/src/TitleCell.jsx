import React from 'react'

const TitleCell = ({item}) => {
   const titles=[]
   const length = Object.keys(item).length
    for( let i=0; i<length; i++){
       titles.push(Object.keys(item).splice(i,1))
    }
console.log(titles, length)
    return (
   titles.map((title)=><td key={title}>{title}</td>)
    
    )  
}

export default TitleCell