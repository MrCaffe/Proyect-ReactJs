// Tools
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Spinner} from 'react-bootstrap'


// Components
import {Travels} from '../Mock/Mock.js'
import {TravelList} from '../TravelList/TravelList.js'

export const ItemListContainer = () => {

	const [travels, setTravels] = useState([])
	const [loading, setLoading] = useState([true])

	const AskDates = () => {
		return new Promise ((resolve, reject) => {
			setTimeout (() => {
				resolve (Travels)
			}, 1000)
		})
	}

	useEffect ( () => {
		AskDates()
			.then ((resp) => {
				setTravels(resp)
			})
			.catch ((error) => {
				console.log("Error: ", error)
			})
			.finally (() => {
				setLoading(false)
			})
	}, [])



	return (
		<section>

		{
			loading
			? <Spinner animation="border" role="status">
  				<span className="visually-hidden">Loading...</span>
				</Spinner>
			: <>
				<TravelList travels={travels}/>
				</>
		}

	
		</section>
	)
}