import React from "react";
import {connect} from "react-redux";
import WordByCelebrity from "./WordByCelebrity";
import {
	addPointBlue,
	addPointRed,
	nextRound,
	prevRound,
	roundTeamSet
} from "../../../store/NavigationsReducer";

class WordByCelebrityContainer extends React.Component{
	render() {
		return <WordByCelebrity {...this.props}/>
	}
}

const mapStateToProps = state => {
	return{
		wordByCelebrity: state.wordByCelebrity.wordByCelebrity,
		roundNum: state.navigations.roundNum,
	}
};

export default connect(mapStateToProps, {
	nextRound, prevRound, addPointRed, addPointBlue, roundTeamSet
})(WordByCelebrityContainer);