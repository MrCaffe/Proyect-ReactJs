// Tools
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Components
import {Counter} from './components/Counter/Counter.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import {NavBar} from './components/NavBar/NavBar.js'
import {Footer} from './components/Footer/Footer.js'

import {Contact} from './components/Contact/Contact.js'
import {Us} from './components/Us/Us.js'
import {Cart} from './components/Cart/Cart.js'


function App() {

  const [show, setShow] = useState(true)

  const handleShowCounter = () => {
    setShow(!show)
  }

  return (



    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" element= {<ItemListContainer/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/us" element= {<Us/>}/>
        <Route path="/cart" element= {<Counter/>}/>

        <Route path="*" element= {<Navigate to ={"/"}/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>


/*      {
        show ? <Counter/> : " "
      }

      <button class="btn btn-primary" onClick={handleShowCounter}> Show/Hide </button>
*/

   


  )
}

export default App;
