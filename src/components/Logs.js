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

// I changed this to array since I set up my store/reducer differently than Brad's (and left out isRequired since it's null to start with)
Logs.propTypes = {
	logs: PropTypes.array,
	getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
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

// Connect is an HOC, which means it wraps our component and returns a new one that has access to state and the functions
const ConnectedLogs = connect(mapStateToProps, mapDispatchToProps)(Logs)

export default ConnectedLogs
