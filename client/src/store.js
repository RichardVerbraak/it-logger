import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logsReducer from './reducers/logs'
import techsReducer from './reducers/techs'

// No clue why Brad added this here
// const initialState = {}

// Array of our middleware
const middleware = [thunk]

const store = createStore(
	combineReducers({
		logs: logsReducer,
		techs: techsReducer,
	}),
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
