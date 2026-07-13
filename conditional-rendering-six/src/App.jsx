
import { useState } from 'react'
import './App.css'
import LoginBtn from './Components/Loginbtn';
import LogoutBtn from './Components/Logoutbtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  //Early return
  if(!isLoggedIn){
    return(
      <div><LoginBtn/></div>
    )
  }

  return (
    //Logical operator
    <div>
      <h1>hello</h1>
      <div>{isLoggedIn && <LogoutBtn />}</div>
    </div>
    
  )


  //ternary operator
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )


  //if else
    // if(isLoggedIn)
    // {
    //   return (
    //   <LogoutBtn />
    //   )
    // }
    // else{
    //  return ( 
    //  <LoginBtn />
    //  )
    // }
  
}

export default App
