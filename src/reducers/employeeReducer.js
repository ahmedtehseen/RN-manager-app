import {
	EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIL_STATE = {};

export default (state = INITIL_STATE, action) => {
	switch(action.type) {
		case EMPLOYEES_FETCH_SUCCESS:
			return action.payload;
		default:
			return state;
	};
};