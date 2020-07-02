import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTech } from '../actions/techs'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the first name and last name' })
		} else {
			const newTech = {
				firstName,
				lastName,
			}

			addTech(newTech)

			M.toast({ html: `${firstName} ${lastName} added as new tech` })

			// Clear fields
			setFirstName('')
			setLastName('')
		}
	}

	return (
		<div id='add-tech-modal' className='modal'>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value)
							}}
						/>
						<label htmlFor='firstName' className='active'>
							First Name
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value)
							}}
						/>
						<label htmlFor='lastName' className='active'>
							Last Name
						</label>
					</div>
				</div>
			</div>

			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect blue waves-light btn'
				>
					Enter
				</a>
			</div>
		</div>
	)
}

AddTechModal.propTypes = {
	addTech: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTech: (tech) => dispatch(addTech(tech)),
	}
}

const ConnectedAddTechModal = connect(
	undefined,
	mapDispatchToProps
)(AddTechModal)

export default ConnectedAddTechModal
