import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)

return (
<>
  <div className="main">
    <a href="">
      <h1 className="logo">LOGO</h1>
    </a>



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
<section className='banner'>

  <div className="banner_text">
    <h1>Md.Rakibul Hassan</h1>
    <p>I'm a student of Creative IT</p>
  </div>
</section>
</>
)
}

export default App