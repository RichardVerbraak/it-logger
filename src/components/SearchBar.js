import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchLogs } from '../actions/logs'

// Could use e.target.value as well but useRef just for demonstrative purposes
const SearchBar = ({ searchLogs }) => {
	const text = useRef('')

	return (
		<nav style={{ marginBottom: '30px' }} className='blue'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input
							onChange={(e) => {
								searchLogs(text.current.value)
							}}
							id='search'
							type='search'
							ref={text}
							placeholder='Search logs...'
						/>
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
						<i className='material-icons'>close</i>
					</div>
				</form>
			</div>
		</nav>
	)
}

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
	return {
		searchLogs: (text) => dispatch(searchLogs(text)),
	}
}

const ConnectedSearchBar = connect(undefined, mapDispatchToProps)(SearchBar)

export default ConnectedSearchBar
