
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
  //Create state
  //manage state
  //change state
  //sabhi child me state ko sync kar sakte hai
  const [name, setName] = useState('');
  return (
   <div>
    <Card title = 'Card1' name={name} setName={setName} />
    <Card title = 'Card2' name={name} setName={setName} />
   </div>
  )
}

export default App
