import React from 'react'

const Button = ({buttonText, reqUrl, setReqUrl}) => {
  return (
<button className={buttonText===reqUrl? 'selected':null} 
type="button"
onClick={()=>setReqUrl(buttonText)}>
    {buttonText}
</button>
  )
}

export default Button