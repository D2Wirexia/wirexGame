import {MusicWord} from "../library/game3/round_3";

const VISION_WORD_1 = 'VISION_WORD_1';
const VISION_WORD_2 = 'VISION_WORD_2';
const VISION_WORD_3 = 'VISION_WORD_3';
const VISION_WORD_4 = 'VISION_WORD_4';
const VISION_WORD_5 = 'VISION_WORD_5';
const SHOW_PROMPT = 'SHOW_PROMPT';
const SHOW_NAME = 'SHOW_NAME';

let initialState = {
	musicWord: MusicWord,
	visionWordOne: false,
	visionWordTwo: false,
	visionWordThree: false,
	visionWordFour: false,
	visionWordFive: false,
	showPrompt: false,
	showName: false,
	isActiveBtnCountPoints: true,

};

const musicWordsReducer = (state = initialState, action) => {
	switch (action.type) {
		case VISION_WORD_1: {
			return {
				...state,
				visionWordOne: action.showWord
			}
		}
		case VISION_WORD_2: {
			return {
				...state,
				visionWordTwo: action.showWord
			}
		}
		case VISION_WORD_3: {
			return {
				...state,
				visionWordThree: action.showWord
			}
		}
		case VISION_WORD_4: {
			return {
				...state,
				visionWordFour: action.showWord
			}
		}
		case VISION_WORD_5: {
			return {
				...state,
				visionWordFive: action.showWord
			}
		}
		case SHOW_PROMPT: {
			return {
				...state,
				showPrompt: action.showPrompt
			}
		}
		case SHOW_NAME: {
			return {
				...state,
				showName: action.showName
			}
		}

		default: return state
	}
};

export const visionWordOneAC = (showWord) => {
	return{
		type: VISION_WORD_1,
		showWord
	}
};
export const visionWordTwoAC = (showWord) => {
	return{
		type: VISION_WORD_2,
		showWord
	}
};
export const visionWordThreeAC = (showWord) => {
	return{
		type: VISION_WORD_3,
		showWord
	}
};
export const visionWordFourAC = (showWord) => {
	return{
		type: VISION_WORD_4,
		showWord
	}
};
export const visionWordFiveAC = (showWord) => {
	return{
		type: VISION_WORD_5,
		showWord
	}
};
export const showPromptAC = (showPrompt) => {
	return{
		type: SHOW_PROMPT,
		showPrompt
	}
};
export const showNameAC = (showName) => {
	return{
		type: SHOW_NAME,
		showName
	}
};


export default musicWordsReducer;