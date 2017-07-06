import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 60 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>
			<Scene key="main">
				<Scene key="employeeList" component={EmployeeList} title="Employee List" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;