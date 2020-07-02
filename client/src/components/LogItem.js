import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteLog, setCurrent } from '../actions/logs'

import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {
	const onDelete = () => {
		deleteLog(log.id)
		M.toast({ html: 'Log deleted' })
	}

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention ? 'red-text' : 'blue-text'
					}`}
					onClick={() => {
						setCurrent(log)
					}}
				>
					{log.message}
				</a>
				<br />
				<span className='grey-text'>
					<span className='black-text'>ID #{log.id}</span> last updated by{' '}
					<span className='black-text'>{log.tech}</span> on{' '}
					<Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
				</span>
				<a
					href='#!'
					className='secondary-content'
					onClick={() => {
						onDelete()
					}}
				>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</div>
		</li>
	)
}

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteLog: (id) => dispatch(deleteLog(id)),
		setCurrent: (log) => dispatch(setCurrent(log)),
	}
}

const ConnectedLogItem = connect(undefined, mapDispatchToProps)(LogItem)

export default ConnectedLogItem
