import React, { Fragment, useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

import SearchBar from './components/SearchBar'
import Logs from './components/Logs'
import AddBtn from './components/AddBtn'
import AddLogModal from './components/AddLogModal'
import EditLogModal from './components/EditLogModal'
import AddTechModal from './components/AddTechModal'
import TechListModal from './components/TechListModal'

import { Provider } from 'react-redux'
import store from './store'

const App = () => {
	// Initialize materialize JS (for modals and stuff)
	useEffect(() => {
		M.AutoInit()
	})
	return (
		<Provider store={store}>
			<Fragment>
				<SearchBar />
				<div className='container'>
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechListModal />
					<Logs />
				</div>
			</Fragment>
		</Provider>
	)
}

export default App
