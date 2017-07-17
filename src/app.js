import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/loginForm';
import Router from './Router';

console.ignoredYellowBox = [ 'Setting a timer' ];

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: 'AIzaSyBXy4YqmTqQWaZzHHc46txWdmMvN0fW3I8',
	    authDomain: 'react-native-manager-app.firebaseapp.com',
	    databaseURL: 'https://react-native-manager-app.firebaseio.com',
	    projectId: 'react-native-manager-app',
	    storageBucket: '',
	    messagingSenderId: '966667156119'
	  };

	  firebase.initializeApp(config);
	}

	render() {
	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		);
	}
}

export default App;