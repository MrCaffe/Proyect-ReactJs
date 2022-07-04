import {Travel} from '../Travel/Travel.js'

export const TravelList = ({travels}) => {

	return (
		<section>

			<h1> Travels Avalaible </h1>
			<hr/>
		
			{
				travels.map((travel) => <Travel key={travel.id} travel={travel}/>)
			}

		</section>
	)

}