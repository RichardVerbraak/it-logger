const initialState = {
	techs: null,
	loading: false,
	error: null,
}

// Filters by _id instead of id due to mongoDB

const techsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_TECHS':
			return {
				...state,
				techs: action.payload,
				loading: false,
			}
		case 'ADD_TECH':
			return {
				...state,
				techs: [...state.techs, action.payload],
			}
		case 'DELETE_TECH':
			return {
				...state,
				techs: state.techs.filter((tech) => {
					return tech._id !== action.payload
				}),
				loading: false,
			}
		case 'TECHS_ERROR':
			return {
				...state,
				error: action.payload,
				loading: false,
			}

		default:
			return state
	}
}

export default techsReducer
