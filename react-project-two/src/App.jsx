import './App.css'
import Usercard from './Components/Usercard'
import f1pic from './assets/images.jfif'
import f2pic from './assets/img2.jpg'
import f3pic from './assets/img3.jpg'

function App() {
  

  return (
    <div className='container'>
      <Usercard name="Rashmika Ambla" desc="Desc1" image={f1pic} style={{"border-radius":"40px"}}/>
      <Usercard name = "Manali Kachhiya" desc="Desc2" image={f2pic} style={{"border-radius":"40px"}}/>
      <Usercard name = "Rupal Patel" desc="Desc3" image={f3pic} style={{"border-radius":"40px"}}/>
    </div>
  )
}

export default App