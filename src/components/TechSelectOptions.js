import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../actions/techs'

const TechSelectOptions = ({ getTechs, techs, loading }) => {
	useEffect(() => {
		getTechs()
		// eslint-disable-next-line
	}, [])

	return (
		!loading &&
		techs !== null &&
		techs.map((tech) => {
			return (
				<option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
					{tech.firstName} {tech.lastName}
				</option>
			)
		})
	)
}

TechSelectOptions.propTypes = {
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

const ConnectedTechSelectOptions = connect(
	mapStateToProps,
	mapDispatchToProps
)(TechSelectOptions)

export default ConnectedTechSelectOptions
