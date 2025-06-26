import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (
<>
  <div className="main">

    <div className="logo">LOGO</div>


    <div className="nav_items">
      <h2>Home</h2>
      <h2>Shop</h2>
      <h2>About US</h2>
      <h2> Contact</h2>
      <h2>OTHERS</h2>
    </div>


    <div className="navInp_and_btn">

      <input type="text" />
      <button>BUY NOW</button>

    </div>











  </div>
</>
)
}

export default App