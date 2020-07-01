import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteTech } from '../actions/techs'

const TechItem = ({ tech, deleteTech }) => {
	const { firstName, lastName } = tech

	const onDelete = () => {
		deleteTech(tech.id)
	}

	return (
		<li className='collection-item'>
			<div>
				{firstName} {lastName}
				<a href='#!' className='secondary-content' onClick={onDelete}>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	)
}

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTech: (id) => dispatch(deleteTech(id)),
	}
}

const ConnectedTechItem = connect(undefined, mapDispatchToProps)(TechItem)

export default ConnectedTechItem
