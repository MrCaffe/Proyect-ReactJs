// Tools
import {Link} from 'react-router-dom'

// Components
import {CartWidget} from '../CartWidget/CartWidget.js'


export const Travel = ({travel}) => {
	return (
		<div key={travel.id}>
			<h2> Origin: {travel.origin} </h2>
			<h2> Destination: {travel.destination} </h2>
			<img src={travel.img} alt="imagen"/>
			<h3> Price: ${travel.price} </h3>

			<div >
				<Link to={"/cart"} className="linkBar"> <CartWidget/> </Link>
			</div>

			<hr/>
		</div>
	)
}