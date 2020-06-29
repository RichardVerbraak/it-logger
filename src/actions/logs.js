// ## How I usually dispatch an action to the reducer
// export const getLogs = () => {
// 	return (dispatch) => {
// 		try {
// 			setLoading()

// 			fetch('/logs')
// 				.then((res) => {
// 					return res.json()
// 				})
// 				.then((data) => {
// 					dispatch({
// 						type: 'GET_LOGS',
// 						payload: data,
// 					})
// 				})
// 		} catch (error) {
// 			dispatch({
// 				type: 'LOGS_ERROR',
// 				payload: error.response.data,
// 			})
// 		}
// 	}
// }

// ## Brad's Way of doing it
// export const getLogs = () => {
// 	return async (dispatch) => {
// 		try {
// 			setLoading()

// 			const res = await fetch('/logs')
// 			const data = await res.json()

// 			dispatch({
// 				type: 'GET_LOGS',
// 				payload: data,
// 			})
// 		} catch (error) {
// 			dispatch({
// 				type: 'LOGS_ERROR',
// 				payload: error.response.data,
// 			})
// 		}
// 	}
// }

// Refactored way with added try catch (I like both of the above better)
export const getLogs = () => async (dispatch) => {
	try {
		setLoading()

		const res = await fetch('/logs')
		const data = await res.json()

		dispatch({
			type: 'GET_LOGS',
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: 'LOGS_ERROR',
			payload: error.response.data,
		})
	}
}

export const addLog = (log) => {
	return async (dispatch) => {
		try {
			setLoading()

			const res = await fetch('/logs', {
				method: 'POST',
				body: JSON.stringify(log),
				headers: {
					'Content-Type': 'application/json',
				},
			})

			const data = await res.json()

			dispatch({
				type: 'ADD_LOG',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'LOGS_ERROR',
				payload: error.response.data,
			})
		}
	}
}

export const deleteLog = (id) => {
	return async (dispatch) => {
		try {
			setLoading()

			await fetch(`/logs/${id}`, {
				method: 'DELETE',
			})

			dispatch({
				type: 'DELETE_LOG',
				payload: id,
			})
		} catch (error) {
			dispatch({
				type: 'LOGS_ERROR',
				payload: error.response.data,
			})
		}
	}
}

export const updateLog = () => {}

export const clearLogs = () => {}

export const setCurrent = () => {}

export const clearCurrent = () => {}

export const setLoading = () => {
	return {
		type: 'SET_LOADING',
	}
}

export const logsError = () => {}

export const searchLogs = () => {}
