import {WhatCommon} from './../library/game3/round_1'

const SHOW_ANSWER_WHAT_COMMON = 'SHOW_ANSWER_WHAT_COMMON';

let initialState = {
	whatCommon: WhatCommon,
	isShowAnswerWhatCommon: false,
};
const whatCommonReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ANSWER_WHAT_COMMON: {
			return {
				...state,
				isShowAnswerWhatCommon: action.showAnswerWhatCommon,
			}
		}
		default: return state
	}
};

export const showAnswerWhatCommon = (showAnswerWhatCommon) => {
	return{
		type: SHOW_ANSWER_WHAT_COMMON,
		showAnswerWhatCommon
	}
};

export default whatCommonReducer;
