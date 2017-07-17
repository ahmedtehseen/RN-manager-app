import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 60 }}>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please Login" />
			</Scene>
			<Scene key="main">
				<Scene 
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add"
					key="employeeList" 
					component={EmployeeList} 
					title="Employee List"
					initial
				/>
				<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
				<Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;