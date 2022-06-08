import { useEffect, useState } from 'react';
import Button from './Button';
import Contents from './Contents';

function App() {
const [items, setItems] = useState([])
const [reqUrl, setReqUrl] = useState('users')
const [errorMsg, setErrorMsg] = useState(null)
const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
   const fetchItems=async()=>{
    try{
      const API_URL = "https://jsonplaceholder.typicode.com"
      const response = await fetch(`${API_URL}/${reqUrl}`)
      if(!response.ok) throw Error('Could not load the data')
      const receivedItems = await response.json()
      setItems(receivedItems)
      setErrorMsg(null)
    }
    catch(err){
      setErrorMsg(err.message)

    }
    finally{
      setIsLoading(false)
    }
  }
  (async ()=> await fetchItems())()
},[reqUrl])
  

  return (
    <div className="App">
      <form type="submit" onSubmit={(e)=>e.preventDefault()}>
      <Button buttonText='users' reqUrl={reqUrl} setReqUrl={setReqUrl}/>
      <Button buttonText='posts' reqUrl={reqUrl} setReqUrl={setReqUrl}/>
      <Button buttonText='comments' reqUrl={reqUrl} setReqUrl={setReqUrl}/>
        <div className='contents'>
          <Contents items={items} isLoading={isLoading} errorMsg={errorMsg}/>
        </div>
      </form>
    </div>
  );
}

export default App;
