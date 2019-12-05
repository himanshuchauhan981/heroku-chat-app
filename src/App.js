import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signUp'
import Home from './components/home'
import CreateGroup from './components/createGroup'


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={SignUp} />
				<Route path="/home" component={Home} />
				<Route path="/group" component={CreateGroup} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
