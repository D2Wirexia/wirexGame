import React from "react";
import s from './HeaderInfoTable.module.css'
import {NavLink} from 'react-router-dom'

function HeaderInfoTable(props) {

	let countPointsRed = React.createRef();
	let onCountPointsRed = () => {
		let text = countPointsRed.current.value;
		props.updateScoreRedAC(text);
	};

	let countPointsBlue = React.createRef();
	let onCountPointsBlue = () => {
		let text = countPointsBlue.current.value;
		props.updateScoreBlueAC(text)
	};

	const lightLed = {
		"background": '#ffff00',
		"box-shadow": '1px 1px 2px #ffee35,\n' +
			 '\t\t 1px -1px 2px #ffee35,\n' +
			 '\t\t 0 2px #fffe60,\n' +
			 '\t\t 0 -2px #fffe60,\n' +
			 '\t\t 1px 1px 5px #ffff9d,\n' +
			 '\t\t -1px -1px 5px #ffff9d,\n' +
			 '\t\t 2px 2px 15px #f8ffcc,\n' +
			 '\t\t -2px -2px 15px #f8ffcc'
	};
	const colorTeam = {
		color: "#ffff00"
	};
	return (
		 <div className={s.header}>

			 <div className={s.red} style={props.roundTeam === 'Red' ? colorTeam : null}>
				 <div className={s.name}>
					 {props.nameTeamRed}
				 </div>
				 <div className={s.score}>
					 {props.scoreRed}
				 </div>
				 <div className={s.refactors}>
					 <input type={'number'}
							  ref={countPointsRed}
							  onChange={onCountPointsRed}
							  value={props.updateScoreRed}
					 />
					 <button onClick={() => { props.changeScoreRed(Number(props.updateScoreRed))}}>Изменить</button>
					 <div className={s.led} style={props.roundTeam === 'Red' ? lightLed : null}/>
				 </div>
			 </div>

			 <div className={s.centerBlock}>
			{/*	 <div className={s.logo}>
					 <NavLink to={'/'}>
					 	<img src={logo}/>
					 </NavLink>
				 </div>*/}
				<div className={s.showArrBntRound}>Перейти к следующему раунду</div>
				 <ul className={s.arrBntRound}>
					<div>
						<NavLink to={'/'}
									activeClassName={s.active}
									className={`${s.button} ${s.pill}`}
									onClick={()=> {
										props.setCountRound();
										props.roundTeamSet(null)
									}}>
							<i className="fas fa-home"/>
						</NavLink>
					</div>
					 <div>
						 <ul className={`${s.button} ${s.pill}`}>
							 Показать раунды

							 <li>
								 <NavLink to={'/round-1'}
											 onClick={()=> {props.setCountRound()}}>
									 Что общего?
								 </NavLink>
							 </li>
							 <li>
								 <NavLink to={'/round-2'}
											 onClick={()=> {props.setCountRound()}}>
									 1 из 3
								 </NavLink>
							 </li>
							 <li>
								 <NavLink to={'/round-3'}
											 onClick={()=> {props.setCountRound()}}>
									 Музыкальная шкатулка
								 </NavLink>
							 </li>
							 <li>
								 <NavLink to={'/round-4'}
											 onClick={()=> {props.setCountRound()}}>
									 Раставить по местам
								 </NavLink>
							 </li>
							 <li>
								 <NavLink to={'/round-5'}
											 onClick={()=> {props.setCountRound()}}>
									 Связывающее
								 </NavLink>
							 </li>
						 </ul>
					 </div>



				 </ul>
			 </div>

			 <div className={s.blue} style={props.roundTeam === 'Blue' ? colorTeam : null}>
				 <div className={s.upBlock}>
					 <div className={s.name}>
						 {props.nameTeamBlue}
					 </div>
					 <div className={s.score}>
						 {props.scoreBlue}
					 </div>
				 </div>
				 <div className={s.refactors}>
					 <input type={'number'}
							  ref={countPointsBlue}
							  onChange={onCountPointsBlue}
							  value={props.updateScoreBlue}/>
					 <button onClick={() => { props.changeScoreBlue(Number(props.updateScoreBlue))}}>Изменить</button>
				 <div className={s.led} style={props.roundTeam === 'Blue' ? lightLed : null}/>
				 </div>
			 </div>

		 </div>
	)
}

export default HeaderInfoTable;