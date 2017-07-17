import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATED,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS,
	EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: ''
};

export default ( state = INITIAL_STATE, action) => {
	switch (action.type){
		case EMPLOYEE_UPDATE:
			console.log('checking action',action);
			return { ...state, [action.payload.prop]: action.payload.value };
		case EMPLOYEE_CREATED:
		case EMPLOYEE_SAVE_SUCCESS:
		case EMPLOYEE_DELETE_SUCCESS:
			return INITIAL_STATE;
		default:
			return state;
	};
};