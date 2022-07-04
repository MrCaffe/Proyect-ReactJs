// Tools
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// Components
import {Calendar} from 'react-calendar'
import {Travels} from '../Mock/Mock.js'

export const Counter = ({max}) => {

	const [travel, setTravel] = useState([])

	const [counter, setCounter] = useState(1)

	const [date, setDate] = useState(new Date());

	const handleIncrease = () => {
		setCounter (counter + 1)
	}

	const handleDecrease = () => {
		setCounter(counter - 1)
	}

	useEffect (() => {
		console.log ("Montaje Counter")
		return () => {
			console.log ("Etapa Desmontaje")
		}
	}, [counter])

	return (

		<section>

			{/*Contador */}
			<h5> Passengers: {counter} </h5>

			<button className="btn btn-outline-danger btn-sm mx-4" onClick={handleDecrease}> - </button> 

			<button className="btn btn-outline-primary btn-sm" onClick={handleIncrease}> + </button>

			{/*Calendar*/}
			<div>

      	<h1 className='text-center'> Select Date </h1>

      	<div className='calendar-container'>
        	<Calendar onChange={setDate} value={date}/>
      	</div>

	      	<p className='text-center'>
	        	<span className='bold'>Selected Date & Time: </span>{' '}
	        	{date.toDateString()}

	        	<button className="btn btn-success btn-sm mx-4"> Check Out </button> 
	      	</p>

    	</div>

		</section>

	)
}