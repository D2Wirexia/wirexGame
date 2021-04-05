import React, {useEffect, useState} from "react";
import s from './PutInPlace.module.css'
import './../../../css/all.min.css'


const PutInPlace = (props) => {

	let [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(() => {
		setNowCountRound(props.roundNum)
	}, [props.roundNum]);
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.putInPlaces.length;

	/*let cloneMessConcept = props.putInPlaces[messCountRound].concept.slice();
	let randomizeMess = cloneMessConcept.sort(() => Math.random() - 0.5);*/

	let randomizeMess = props.putInPlaces[messCountRound].conceptRand;
	randomizeMess = ["Выберите вариант", ...randomizeMess];
	let nowPoint = 0;

	let [resultSelectValue1, setResultSelectValue1] = useState(null);
	let [resultSelectValue2, setResultSelectValue2] = useState(null);
	let [resultSelectValue3, setResultSelectValue3] = useState(null);
	let [resultSelectValue4, setResultSelectValue4] = useState(null);
	let [resultSelectValue5, setResultSelectValue5] = useState(null);
	let [resultSelectValue6, setResultSelectValue6] = useState(null);

	let [resultsSelectedValues, setResultsSelectedValues] = useState([]);
	useEffect(()=>{
		setResultsSelectedValues([resultSelectValue1, resultSelectValue2, resultSelectValue3,
			 resultSelectValue4, resultSelectValue5, resultSelectValue6])
	}, [resultSelectValue1, resultSelectValue2, resultSelectValue3,
		resultSelectValue4, resultSelectValue5, resultSelectValue6]);

	let [coincidence1, setCoincidence1] = useState(false);
	let [coincidence2, setCoincidence2] = useState(false);
	let [coincidence3, setCoincidence3] = useState(false);
	let [coincidence4, setCoincidence4] = useState(false);
	let [coincidence5, setCoincidence5] = useState(false);
	let [coincidence6, setCoincidence6] = useState(false);

	let [btnIsActive, setBtnIsActive] = useState(false);


	const divColor = {
		color: "yellow"
	};
	const borderColorTrue = {
		border: "5px solid green"
	};
	const borderColorFalse = {
		border: "5px solid red"
	};

	let variants =
		 <div className={s.blockVariants}>
			 <div className={s.variant}
					style={resultsSelectedValues.some(res => res === randomizeMess[1]) ? divColor : null}>{randomizeMess[1]}</div>
			 <div className={s.variant}
					style={resultsSelectedValues.some(res => res === randomizeMess[2]) ? divColor : null}>{randomizeMess[2]}</div>
			 <div className={s.variant}
					style={resultsSelectedValues.some(res => res === randomizeMess[3]) ? divColor : null}>{randomizeMess[3]}</div>
			 <div className={s.variant}
					style={resultsSelectedValues.some(res => res === randomizeMess[4]) ? divColor : null}>{randomizeMess[4]}</div>
			 <div className={s.variant}
					style={resultsSelectedValues.some(res => res === randomizeMess[5]) ? divColor : null}>{randomizeMess[5]}</div>
			 <div className={s.variant}
					style={resultsSelectedValues.some(res => res === randomizeMess[6]) ? divColor : null}>{randomizeMess[6]}</div>
		 </div>;

	const handleSelect1 = (event) => {
			setResultSelectValue1(event.target.value)
	};
	const handleSelect2 = (event) => {
		setResultSelectValue2(event.target.value);
	};
	const handleSelect3 = (event) => {
		setResultSelectValue3(event.target.value);
	};
	const handleSelect4 = (event) => {
		setResultSelectValue4(event.target.value);
	};
	const handleSelect5 = (event) => {
		setResultSelectValue5(event.target.value);
	};
	const handleSelect6 = (event) => {
		setResultSelectValue6(event.target.value);
	};
	let selectVariants1 =
		 <select onChange={handleSelect1} value={resultSelectValue1} defaultValue={randomizeMess[0]}>
				 <option selected value={randomizeMess[0]}>{randomizeMess[0]}</option>
				 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
				 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
				 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
				 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
				 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
				 <option value={randomizeMess[6]}>{randomizeMess[6]}</option>
		 </select>;

	let selectVariants2 =
		 <select onChange={handleSelect2} value={resultSelectValue2} defaultValue={randomizeMess[0]}>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
			 <option value={randomizeMess[6]}>{randomizeMess[6]}</option>
		 </select>
	let selectVariants3 =
		 <select onChange={handleSelect3} value={resultSelectValue3} defaultValue={randomizeMess[0]}>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
			 <option value={randomizeMess[6]}>{randomizeMess[6]}</option>
		 </select>
	let selectVariants4 =
		 <select onChange={handleSelect4} value={resultSelectValue4} defaultValue={randomizeMess[0]}>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
			 <option value={randomizeMess[6]}>{randomizeMess[6]}</option>
		 </select>
	let selectVariants5 =
		 <select onChange={handleSelect5} value={resultSelectValue5} defaultValue={randomizeMess[0]}>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
			 <option value={randomizeMess[6]}>{randomizeMess[6]}</option>
		 </select>
	let selectVariants6 =
		 <select onChange={handleSelect6} value={resultSelectValue6} defaultValue={randomizeMess[0]}>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
			 <option value={randomizeMess[6]}>{randomizeMess[6]}</option>
		 </select>


	let imgVariants =
		 <div className={s.imgVariants}>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[0]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[0]} alt="picture1"
						style={btnIsActive ? coincidence1 ? borderColorTrue : borderColorFalse : null}/>
				 <div className={s.selectVar}>{selectVariants1}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[1]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[1]} alt="picture2"
						style={btnIsActive ? coincidence2 ? borderColorTrue : borderColorFalse : null}/>
				 <div className={s.selectVar}>{selectVariants2}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[2]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[2]} alt="picture3"
						style={btnIsActive ? coincidence3 ? borderColorTrue : borderColorFalse : null}/>
				 <div className={s.selectVar}>{selectVariants3}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[3]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[3]} alt="picture4"
						style={btnIsActive ? coincidence4 ? borderColorTrue : borderColorFalse : null}/>
				 <div className={s.selectVar}>{selectVariants4}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[4]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[4]} alt="picture5"
						style={btnIsActive ? coincidence5 ? borderColorTrue : borderColorFalse : null}/>
				 <div className={s.selectVar}>{selectVariants5}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[5]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[5]} alt="picture6"
						style={btnIsActive ? coincidence6 ? borderColorTrue : borderColorFalse : null}/>
				 <div className={s.selectVar}>{selectVariants6}</div>
			 </div>
		 </div>;





	if(nowCountRound % 2 === 0){
		props.roundTeamSet('Blue');
	}else{
		props.roundTeamSet('Red');
	}

	return (
		 <div className={s.round4}>

			 <div className={s.body_button}>
				 <div className={s.button_hola} onClick={() => {
					 if(resultSelectValue1 === props.putInPlaces[messCountRound].concept[0]){
						 nowPoint += 1;
						 setBtnIsActive(true);
						 setCoincidence1(true);
					 }else{
						 setCoincidence1(false);
					 }
					 if(resultSelectValue2 === props.putInPlaces[messCountRound].concept[1]){
						 nowPoint += 1;
						 setBtnIsActive(true);
						 setCoincidence2(true);
					 }else{
						 setCoincidence2(false);
					 }
					 if(resultSelectValue3 === props.putInPlaces[messCountRound].concept[2]){
						 nowPoint += 1;
						 setBtnIsActive(true);
						 setCoincidence3(true);
					 }else{
						 setCoincidence3(false);
					 }
					 if(resultSelectValue4 === props.putInPlaces[messCountRound].concept[3]){
						 nowPoint += 1;
						 setBtnIsActive(true);
						 setCoincidence4(true);
					 }else{
						 setCoincidence4(false);
					 }
					 if(resultSelectValue5 === props.putInPlaces[messCountRound].concept[4]){
						 nowPoint += 1;
						 setBtnIsActive(true);
						 setCoincidence5(true);
					 }else{
						 setCoincidence5(false);
					 }
					 if(resultSelectValue6 === props.putInPlaces[messCountRound].concept[5]){
						 nowPoint += 1;
						 setBtnIsActive(true);
						 setCoincidence6(true);
					 }else{
						 setCoincidence6(false);
					 }
					 if(props.isActiveBtnCountPoints){
						 if(nowCountRound % 2 === 0){
							 props.addPointBlue(nowPoint)
						 }else{
							 props.addPointRed(nowPoint)
						 }
					 	props.activeBtnCountPoints(false);
					 }
					 props.activeBtnCountPoints(false);
					 setBtnIsActive(true);
				 }}><span>Посчитать балы</span></div>
				 <div className={s.button_hola} onClick={() => {
					 props.showAnswerPutInPlace(true)
				 }}><span>Ответ</span></div>
			 </div>


			 <div className={s.prev} id='prevBtn'>
				 <button onClick={() => {
					 if(nowCountRound > 1){
						 props.prevRound();
						 nowPoint = 0;
					 }
					 props.activeBtnCountPoints(true);
					 props.showAnswerPutInPlace(false);
					 setBtnIsActive(false);
					 setResultsSelectedValues([]);
					 setResultSelectValue1(0);
					 setResultSelectValue2(0);
					 setResultSelectValue3(0);
					 setResultSelectValue4(0);
					 setResultSelectValue5(0);
					 setResultSelectValue6(0);
				 }}>
					 <i className="fas fa-chevron-circle-left"/>
				 </button>
			 </div>

			 <div className={s.next} id='nextBtn'>
				 <button onClick={() => {
					 if(nowCountRound < allCountRound){
						 props.nextRound();
						 nowPoint = 0;
					 }
					 props.activeBtnCountPoints(true);
					 props.showAnswerPutInPlace(false);
					 setBtnIsActive(false);
					 setResultsSelectedValues([]);
					 setResultSelectValue1(0);
					 setResultSelectValue2(0);
					 setResultSelectValue3(0);
					 setResultSelectValue4(0);
					 setResultSelectValue5(0);
					 setResultSelectValue6(0);
				 }}>
					 <i className="fas fa-chevron-circle-right"/>
				 </button>
			 </div>

			 <div className={s.containerVariantsWord}>
				 {
					 !props.isShowAnswerPutInPlace
						  ? variants
						  : null
				 }
			 </div>



			 <div className={s.containerPlace}>
				 {imgVariants}
			 </div>

			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>

		 </div>

	);
};

export default PutInPlace;