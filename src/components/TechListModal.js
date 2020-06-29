import React, { useState, useEffect } from 'react'
import TechItem from './TechItem'

const TechListModal = () => {
	const [techs, setTechs] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getTechs()
		// eslint-disable-next-line
	}, [])

	const getTechs = () => {
		setLoading(true)

		fetch('/techs')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setTechs(data)
				setLoading(false)
			})
	}

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Technicians List</h4>
				<ul className='collection'>
					{!loading &&
						techs.map((tech) => {
							return (
								<TechItem
									key={tech.id}
									tech={tech}
									className='collection-item'
								/>
							)
						})}
				</ul>
			</div>
		</div>
	)
}

export default TechListModal
