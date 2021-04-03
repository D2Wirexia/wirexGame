import {combineReducers, createStore} from "redux";
import whatCommonReducer from "./WhatCommonReducer";
import NavigationsReducer from "./NavigationsReducer";
import somethingOneReducer from "./SomethingOneReducer";
import musicWordsReducer from "./MusicWordsReducer";
import putInPlaceReducer from "./PutInPlaceReducer";
import wordByCelebrityReducer from "./WordByCelebrityReducer";

let reducers = combineReducers({
	navigations: NavigationsReducer,
	whatCommon: whatCommonReducer,
	somethingOne: somethingOneReducer,
	musicWords: musicWordsReducer,
	putInPlace: putInPlaceReducer,
	wordByCelebrity: wordByCelebrityReducer
});
let store = createStore(reducers);

window.store = store;

export default store;