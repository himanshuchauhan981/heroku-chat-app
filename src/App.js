import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login'
import SignUp from './components/signUp'
import Home from './components/home'


function App() {
	return (
    	<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/home" component={Home} />
			</Switch>
    	</BrowserRouter>
  	);
}

export default App;
