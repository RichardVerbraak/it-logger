import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getLogs } from '../actions/logs'

import LogItem from './LogItem'
import Preloader from './Preloader'

const Logs = ({ loading, logs, getLogs }) => {
	useEffect(() => {
		getLogs()
		// eslint-disable-next-line
	}, [])

	if (loading || logs === null) {
		return <Preloader />
	}

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>No logs to show...</p>
			) : (
				logs.map((log) => {
					return <LogItem log={log} key={log.id} />
				})
			)}
		</ul>
	)
}

// Logs.propTypes = {
// 	logs: PropTypes.object.isRequired,
// }

const mapStateToProps = (state) => {
	console.log(state)
	return {
		logs: state.logs,
		loading: state.loading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getLogs: () => dispatch(getLogs()),
	}
}

const ConnectedLogs = connect(mapStateToProps, mapDispatchToProps)(Logs)

export default ConnectedLogs
