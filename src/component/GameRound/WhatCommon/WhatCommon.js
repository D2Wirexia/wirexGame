import React, {useEffect, useState} from "react";
import s from './WhatCommon.module.css'
import './../../../css/all.min.css'
import Timer from "../../Timer/Timer";

const WhatCommon = (props) => {
	let [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(() => {
		setNowCountRound(props.roundNum)
	}, [props.roundNum]);
	let [removeTimer, setRemoveTimer] = useState(false);
	useEffect(() => {setRemoveTimer(false)}, [nowCountRound]);
	let [isFetch, setIsFetch] = useState(false);
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.whatCommon.length;
	let whatComImg =
		 <div className={s.blockImg}>
			 <img src={props.whatCommon[messCountRound].img[0]} alt="figure1"/>
			 <img src={props.whatCommon[messCountRound].img[1]} alt="figure2"/>
			 <img src={props.whatCommon[messCountRound].img[2]} alt="figure3"/>
		 </div>;
	nowCountRound % 2 === 0 ? props.roundTeamSet('Red') : props.roundTeamSet('Blue');
	return (
		 <div className={s.round1}>
			 <div className={s.body_button}>
				 <div className={s.button_hola} onClick={() => {
					 if (nowCountRound % 2 === 0) {
						 props.addPointRed(1);
					 } else {
						 props.addPointBlue(1);
					 }
				 }}><span>Верно!</span>
				 </div>
				 <div className={s.button_hola} onClick={() => {
					 if (nowCountRound % 2 === 0) {
						 props.addPointRed(-1);
					 } else {
						 props.addPointBlue(-1);
					 }
				 }}><span>Не верно!</span>
				 </div>
				 <div className={s.button_hola} onClick={() => {
					 props.showAnswerWhatCommon(true);
					 setRemoveTimer(true);
				 }}><span>Ответ</span>
				 </div>
			 </div>
			 <div className={s.prev}>
				 <button onClick={() => {
					 if (nowCountRound > 1) {
						 props.prevRound()
					 }
					 props.showAnswerWhatCommon(false);
					 setRemoveTimer(true);
				 }}>
					 <i className="fas fa-chevron-circle-left"/>
				 </button>
			 </div>
			 <div className={s.next}>
				 <button onClick={() => {
					 if (nowCountRound < allCountRound) {
						 props.nextRound()
					 }
					 props.showAnswerWhatCommon(false);
					 setRemoveTimer(true);
				 }}>
					 <i className="fas fa-chevron-circle-right"/>
				 </button>
			 </div>
			 <div className={s.timerBlock}>
				 <div className={s.startTimer} onClick={() =>{
					 setIsFetch(res => !res);
				 }}>
					 <i className="far fa-play-circle"/>
				 </div>
				 <Timer time={props.timeSet} isFetchButtonStartTimer={isFetch}
						  removeTimer={removeTimer}/>
			 </div>
			 {whatComImg}
			 <div className={s.name}>
				 {
					 props.isShowAnswerWhatCommon
						  ? props.whatCommon[messCountRound].answer
						  : '. . . . .'
				 }
			 </div>
			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>
		 </div>
	)
};
export default WhatCommon;