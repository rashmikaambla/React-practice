
import { useState } from 'react'
import './App.css'
import Button from './Components/Button'
function App() {
  
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    

    <div>
      <Button handleClick={handleClick} 
      text = 'Click me' >
        <h1>{count}</h1>
      </Button>
     
      {/*<Card name="Rashmika">
        <h1>Best Web DEv course</h1>
        <p>Trying to consistent this</p>
      </Card>
      <Card children="mai ek children hu">
        hello jee, kaise ho sare
      </Card>*/}
    </div>
  )
}

export default App
