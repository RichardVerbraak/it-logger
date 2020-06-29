import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import Preloader from './Preloader'

const Logs = () => {
	const [logs, setLogs] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getLogs()
		// eslint-disable-next-line
	}, [])

	const getLogs = () => {
		setLoading(true)

		// /logs because we have made a proxy inside package.json
		fetch('/logs')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				setLogs(data)
				setLoading(false)
			})
	}

	if (loading) {
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

export default Logs
