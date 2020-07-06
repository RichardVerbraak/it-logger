import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TechItem from './TechItem'
import { getTechs } from '../actions/techs'

const TechListModal = ({ techs, loading, getTechs }) => {
	useEffect(() => {
		getTechs()
		// eslint-disable-next-line
	}, [])

	return (
		<div id='tech-list-modal' className='modal'>
			<div className='modal-content'>
				<h4>Technicians List</h4>
				<ul className='collection'>
					{!loading &&
						techs !== null &&
						techs.map((tech) => {
							return (
								<TechItem
									key={tech._id}
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

TechListModal.propTypes = {
	techs: PropTypes.array,
	getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		techs: state.techs.techs,
		loading: state.techs.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getTechs: () => dispatch(getTechs()),
	}
}

const ConnectedTechListModal = connect(
	mapStateToProps,
	mapDispatchToProps
)(TechListModal)

export default ConnectedTechListModal
