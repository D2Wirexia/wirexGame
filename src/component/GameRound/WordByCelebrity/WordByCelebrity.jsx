import React, {useEffect, useState} from "react";
import s from "./WordByCelebrity.module.css";
import Timer from "../../Timer/Timer";

const WordByCelebrity = props => {
	let [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(() => {
		setNowCountRound(props.roundNum)
	}, [props.roundNum]);
	const [messCountRound, setMessCountRound] = useState(nowCountRound - 1);
	useEffect(() => setMessCountRound(nowCountRound - 1), [nowCountRound]);
	let allCountRound = props.wordByCelebrity.length;
	let [isFetch, setIsFetch] = useState(false);
	let [removeTimer, setRemoveTimer] = useState(false);
	useEffect(() => {
		setRemoveTimer(false)
	}, [nowCountRound]);
	nowCountRound % 2 === 0 ? props.roundTeamSet('Red') : props.roundTeamSet('Blue');
	const [point, setPoint] = useState(0);
	const alignmentLeft = {
		marginRight: "30px"
	};
	const alignmentRight = {
		marginLeft: "30px"
	};
	const alignmentCenter = {
		left: "50%",
		transform: "translate(-50%)"
	};
	const [arrResultsWord, setArrResultsWord] = useState([]);
	return (
		 <div className={s.round5}>
			 <div className={s.body_button}>
				 <div className={s.button_hola} onClick={() => {
					 if (nowCountRound % 2 === 0) {
						 props.addPointRed(point);
					 } else {
						 props.addPointBlue(point);
					 }
					 setRemoveTimer(true);
				 }}><span>Ответ</span>
				 </div>
			 </div>
			 <div className={s.prev}>
				 <button onClick={() => {
					 if (nowCountRound > 1) {
						 props.prevRound()
					 }
					 setRemoveTimer(true);
					 setArrResultsWord([]);
					 setPoint(0);
				 }}>
					 <i className="fas fa-chevron-circle-left"/>
				 </button>
			 </div>
			 <div className={s.next}>
				 <button onClick={() => {
					 if (nowCountRound < allCountRound) {
						 props.nextRound()
					 }
					 setArrResultsWord([]);
					 setRemoveTimer(true);
					 setPoint(0);
				 }}>
					 <i className="fas fa-chevron-circle-right"/>
				 </button>
			 </div>
			 <div className={s.timerBlock}>
				 <div className={s.startTimer} onClick={() => {
					 setIsFetch(res => !res);
				 }}>
					 <i className="far fa-play-circle"/>
				 </div>
				 <Timer time={90} isFetchButtonStartTimer={isFetch}
						  removeTimer={removeTimer}/>
			 </div>
			 <div className={s.taskBlock}>
				 <div className={s.wordContainer}>
					 {props.wordByCelebrity[messCountRound].words.map((w, i) => {
						 return <div className={s.wordBlock} key={w}
										 style={i === props.wordByCelebrity[messCountRound].words.length - 1 && i % 2 === 0
											  ? alignmentCenter : i % 2 === 0 ? alignmentLeft : alignmentRight}>
							 <div className={s.firstWord}><span>{w[0]}</span></div>
							 {arrResultsWord[i]
								  ? <div className={s.answerWord}>{w}</div>
								  : <div className={s.answerWord} onClick={() => {
									  setPoint(res => res + 1);
									  let newArrResultsWord = arrResultsWord.slice();
									  newArrResultsWord[i] = true;
									  setArrResultsWord(newArrResultsWord);
								  }}>_ _ _ _ _ _</div>}
						 </div>
					 })}
				 </div>
				 <div className={s.photoBlock}
						style={(props.wordByCelebrity[messCountRound].words.length - 1) % 2 === 0 ? {bottom: "70px"} : null}>
					 <img src={props.wordByCelebrity[messCountRound].img} alt="photoCelebrity"/>
				 </div>
			 </div>
			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>
		 </div>
	);
};
export default WordByCelebrity;