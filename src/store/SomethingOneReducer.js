import {SomethingOne} from "../library/game3/round_2";

const VAR_ONE = 'VAR_ONE';
const VAR_TWO = 'VAR_TWO';
const VAR_THREE = 'VAR_THREE';

let initialState = {
	oneOfTheThree: SomethingOne,
	varOne: false,
	varTwo: false,
	varThree: false,
};

const somethingOneReducer = (state = initialState, action) => {
	switch (action.type) {
		case VAR_ONE: {
			return {
				...state,
				varOne: action.v
			}
		}
		case VAR_TWO: {
			return {
				...state,
				varTwo: action.v
			}
		}
		case VAR_THREE: {
			return {
				...state,
				varThree: action.v
			}
		}

		default: return state
	}
};

export const varOneAC = (v) => {
	return{
		type: VAR_ONE,
		v
	}
};
export const varTwoAC = (v) => {
	return{
		type: VAR_TWO,
		v
	}
};
export const varThreeAC = (v) => {
	return{
		type: VAR_THREE,
		v
	}
};

export default somethingOneReducer;