import React, { useState, useEffect } from 'react'
import TechSelectOptions from './TechSelectOptions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { updateLog } from '../actions/logs'

const EditLogModal = ({ current, updateLog }) => {
	const [message, setMessage] = useState('')
	const [attention, setAttention] = useState(false)
	const [tech, setTech] = useState('')

	useEffect(() => {
		if (current) {
			setMessage(current.message)
			setAttention(current.attention)
			setTech(current.tech)
		}
	}, [current])

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' })
		} else {
			// Forgot the id before this so it didnt know which one to update
			const updatedLog = {
				_id: current._id,
				message,
				attention,
				tech,
				date: Date.now,
			}

			updateLog(updatedLog)
			M.toast({ html: `Log updated by ${tech}` })

			// Clear fields
			setMessage('')
			setTech('')
			setAttention(false)
		}
	}

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(e) => {
								setMessage(e.target.value)
							}}
						/>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(e) => {
								setTech(e.target.value)
							}}
						>
							<option value='' disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									className='filled-in'
									checked={attention}
									value={attention}
									onChange={() => {
										setAttention(!attention)
									}}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
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

const modalStyle = {
	width: '75%',
	height: '75%',
}

EditLogModal.propTypes = {
	current: PropTypes.object,
	updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		current: state.logs.current,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateLog: (log) => dispatch(updateLog(log)),
	}
}

const ConnectedEditLogModal = connect(
	mapStateToProps,
	mapDispatchToProps
)(EditLogModal)

export default ConnectedEditLogModal
