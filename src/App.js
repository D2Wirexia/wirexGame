import './App.css';
import React from "react";
import RoundThreeContainer from "./component/GameRound/MusicWords/MusicWordsContainer";
import {Route} from "react-router-dom";
import InfoTableContainer from "./component/HeaderInfoTable/InfoTableContainer";
import RoundFourContainer from "./component/GameRound/PutInPlace/PutInPlaceContainer";
import RoundOneContainer from "./component/GameRound/WhatCommon/WhatCommonContainer";
import RoundTwoContainer from "./component/GameRound/SomethingOne/SomethingOneContainer";
import MainMenuContainer from "./component/MainMenu/MainMenuContainer";
import WordByCelebrityContainer
   from "./component/GameRound/WordByCelebrity/WordByCelebrityContainer";

function App() {
  return (
      <div className="App">
         <header>
            <InfoTableContainer/>
         </header>
         <Route exact path={'/'} render={() => <MainMenuContainer/>} />
         <Route path={'/round-1'} render={() => <RoundOneContainer/>} />
         <Route path={'/round-2'} render={() => <RoundTwoContainer />} />
         <Route path={'/round-3'} render={() => <RoundThreeContainer/>} />
         <Route path={'/round-4'} render={() => <RoundFourContainer/>} />
         <Route path={'/round-5'} render={() => <WordByCelebrityContainer/>} />
       </div>
  );
}

export default App;
