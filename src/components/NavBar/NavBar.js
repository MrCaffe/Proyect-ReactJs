// Tools
import './NavBar.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

// Components
import {CartWidget} from '../CartWidget/CartWidget.js'

export const NavBar = () => {

  return (

    <header> 
      <nav className="navBar">

        <img src="https://via.placeholder.com/75" class="rounded-circle border border-secondary border border-3" alt="logo bus company"/>
        <div className="linkTitle"> <h1> Bus Company </h1> </div>  
        <Link to={"/"}> <button className="btn btn-primary btn-md"> Travels </button> </Link>  
        <Link to={"/contact"} className="linkBar"> <button className="btn btn-primary btn-md"> Contact </button> </Link>    
        <Link to={"/us"} className="linkBar"> <button className="btn btn-primary btn-md"> Us </button> </Link>   
        <Link to={"/cart"} className="linkBar"> <CartWidget/> </Link> 

      </nav>

    </header>
  )
}