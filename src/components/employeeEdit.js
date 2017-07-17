import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './employeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
	state = { showModal: false}

	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid})
	}

	onTextPress() {
		const { phone, shift } = this.props;
		Communications.text(phone, `Your upcoming shift will be on ${shift}`);
	}

	onAccept() {
		this.props.employeeDelete({ uid:this.props.employee.uid })
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={() => this.onButtonPress()}>
						Save Changes
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.onTextPress()}>
						Text Schedule
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm
					onAccept={() => this.onAccept()}
					onDecline={() => this.onDecline()}
					visible={this.state.showModal}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	};
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate, 
	employeeSave,
	employeeDelete
})(EmployeeEdit);