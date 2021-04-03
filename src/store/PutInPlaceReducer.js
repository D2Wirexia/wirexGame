import {PutInPlaces} from "../library/game3/round_4";

const CHOOSE_VARIANTS_1 = 'CHOOSE_VARIANTS_1';
const CHOOSE_VARIANTS_2 = 'CHOOSE_VARIANTS_2';
const CHOOSE_VARIANTS_3 = 'CHOOSE_VARIANTS_3';
const CHOOSE_VARIANTS_4 = 'CHOOSE_VARIANTS_4';
const CHOOSE_VARIANTS_5 = 'CHOOSE_VARIANTS_5';
const CHOOSE_VARIANTS_6 = 'CHOOSE_VARIANTS_6';
const SHOW_ANSWER_PUT_IN_PLACE = 'SHOW_ANSWER_PUT_IN_PLACE';

let initialState = {
	putInPlaces: PutInPlaces,
	chooseVariants1: false,
	chooseVariants2: false,
	chooseVariants3: false,
	chooseVariants4: false,
	chooseVariants5: false,
	chooseVariants6: false,
};

const putInPlaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHOOSE_VARIANTS_1: {
			return {
				...state,
				chooseVariants1: action.show
			}
		}
		case CHOOSE_VARIANTS_2: {
			return {
				...state,
				chooseVariants2: action.show
			}
		}
		case CHOOSE_VARIANTS_3: {
			return {
				...state,
				chooseVariants3: action.show
			}
		}
		case CHOOSE_VARIANTS_4: {
			return {
				...state,
				chooseVariants4: action.show
			}
		}
		case CHOOSE_VARIANTS_5: {
			return {
				...state,
				chooseVariants5: action.show
			}
		}
		case CHOOSE_VARIANTS_6: {
			return {
				...state,
				chooseVariants6: action.show
			}
		}
		case SHOW_ANSWER_PUT_IN_PLACE: {
			return {
				...state,
				isShowAnswerPutInPlace: action.isShowAnswerPutInPlace,
			}
		}
		default: return state
	}
};

export const chooseVar1 = (show) => {
	return{
		type: CHOOSE_VARIANTS_1,
		show
	}
};
export const chooseVar2 = (show) => {
	return{
		type: CHOOSE_VARIANTS_2,
		show
	}
};
export const chooseVar3 = (show) => {
	return{
		type: CHOOSE_VARIANTS_3,
		show
	}
};
export const chooseVar4 = (show) => {
	return{
		type: CHOOSE_VARIANTS_4,
		show
	}
};
export const chooseVar5 = (show) => {
	return{
		type: CHOOSE_VARIANTS_5,
		show
	}
};
export const chooseVar6 = (show) => {
	return{
		type: CHOOSE_VARIANTS_6,
		show
	}
};
export const showAnswerPutInPlace = (isShowAnswerPutInPlace) => {
	return{
		type: SHOW_ANSWER_PUT_IN_PLACE,
		isShowAnswerPutInPlace
	}
};

export default putInPlaceReducer;