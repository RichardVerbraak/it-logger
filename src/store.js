import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logsReducer from './reducers/logs'

// No clue why Brad added this here
const initialState = {}

// Array of our middleware
const middleware = [thunk]

const store = createStore(
	logsReducer,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
