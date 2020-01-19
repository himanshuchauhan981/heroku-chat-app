import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Login from './components/login'
import SignUp from './components/signUp'
import Home from './components/home'
import CreateGroup from './components/createGroup'
import { store, persistor } from './Store/configureStore'

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={SignUp} />
						<Route path="/home" component={Home} />
						<Route path="/group" component={CreateGroup} />
					</Switch>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
