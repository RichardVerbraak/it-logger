const initialState = {
	logs: null,
	current: null,
	loading: false,
	error: null,
}

const logsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_LOGS':
			return {
				...state,
				logs: action.payload,
				loading: false,
			}
		case 'ADD_LOG':
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false,
			}
		case 'DELETE_LOG':
			return {
				...state,
				logs: state.logs.filter((log) => {
					return log.id !== action.payload
				}),
				loading: false,
			}
		// Finds the log we want to update => if found, set it to the updated log => else leave the log as is
		case 'UPDATE_LOG':
			return {
				...state,
				logs: state.logs.map((log) => {
					return action.payload.id === log.id ? action.payload : log
				}),
			}
		case 'SET_CURRENT':
			return {
				...state,
				current: action.payload,
			}
		case 'CLEAR_CURRENT':
			return {
				...state,
				current: null,
			}
		// The difference from the other project where we filter through our contacts is that those were stored in our state and THEN filtered
		// Here the endpoint were hitting ?q=text will just give us what were searching for and send that as a response, so it's sort of getting filtered by the backend
		// This is all because of json-server
		case 'SEARCH_LOGS':
			return {
				...state,
				logs: action.payload,
			}
		case 'LOGS_ERROR':
			console.log(action.payload)
			return {
				...state,
				error: action.payload,
			}
		case 'SET_LOADING':
			return {
				...state,
				loading: true,
			}

		default:
			return state
	}
}

export default logsReducer
