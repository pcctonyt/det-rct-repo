import React, { useState } from "react";
import Popup from "./components/Popup/Popup";
import ConvUnitCodes from "./components/AllUnitCodes/ConvUnitCodes";
import NucUnitCodes from "./components/AllUnitCodes/NucUnitCodes";
import SDIUnitCodes from "./components/AllUnitCodes/SDIUnitCodes";
import OrderCodes from "./components/OrderCodes/OrderCodes";
import MoveCodes from "./components/MoveCodes/MoveCodes";
import ScoreOperators from "./components/OperatorCodes/OperatorCodes";
import ConvUnitRules from "./components/ConvUnitRules/ConvUnitRules";
import NucSDIRules from "./components/NucSDIRules/NucSDIRules";
import ScoreRules from "./components/ScoreRules/ScoreRules";
import TreatyRules from "./components/TreatyRules/TreatyRules";
import "./App.css";

function App() {

    const [ allUnitCodes, setAllUnitCodes ] = useState(false);
    const [ allOrderCodes, setAllOrderCodes ] = useState(false);
    const [ allMoveCodes, setAllMoveCodes ] = useState(false);
    const [ allScoreOpersCodes, setAllScoreOpersCodes ] = useState(false);
    const [ allConventionalRules, setAllConventionalRules ] = useState(false);
    const [ allNuclearSDIRules, setAllNuclearSDIRules ] = useState(false);
    const [ allScoreSheetRules, setAllScoreSheetRules ] = useState(false);
    const [ allTreatyChartRules, setAllTreatyChartRules ] = useState(false);

  return (
    <div className="deterrence-game-wrapper">
      <header className="deterrence-rules-header-wrapper">
        <h1>Deterrence Official Rules by Section</h1>
        <h2>Click a button to learn more!</h2>
      </header>
      <div className="deterrence-rules-wrapper">

          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allUnits" onClick={() => setAllUnitCodes(true)}>All Score Sheet Unit Codes</button>
            <h2>The Unit Codes allow you to describe a Unit's Orders or Movement on your Deterrence Score Sheet.</h2>
            <Popup trigger={ allUnitCodes } setTrigger={ setAllUnitCodes }>
                  <ConvUnitCodes />
                  <NucUnitCodes />
                  <SDIUnitCodes />                
            </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allOrders" onClick={() => setAllOrderCodes(true)}>All Score Sheet Order Element Codes</button>
            <h2>The Order Element Codes allow you to affect changes to the game without the movement, addition, or removal of any Unit(s) from the Game Board.</h2>
            <Popup trigger={ allOrderCodes } setTrigger={ setAllOrderCodes }>
                  <OrderCodes />
            </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allMoves" onClick={() => setAllMoveCodes(true)}>All Score Sheet Move Element Codes</button>
            <h2>The Move Element Codes allow you to describe Unit movement, placement of new Unit(s), or removal of Unit(s) on the Game Board.</h2>
            <Popup trigger={ allMoveCodes } setTrigger={ setAllMoveCodes }>
                  <MoveCodes />
            </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allScoreOpers" onClick={() => setAllScoreOpersCodes(true)}>All Score Sheet Operator Codes</button>
            <h2>The Score Sheet Operator Codes allow you to describe what occurs between Units and their Orders and Movements</h2>
            <Popup trigger={ allScoreOpersCodes } setTrigger={ setAllScoreOpersCodes }>
                  <ScoreOperators />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allConvRules" onClick={() => setAllConventionalRules(true)}>All Conventional Unit Rules</button>
            <h2>The Official Rules for Conventional Units describe thier placement, movement, orders, and applicable Treaty selections available.</h2>
            <Popup trigger={ allConventionalRules } setTrigger={ setAllConventionalRules }>
                  <ConvUnitRules />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allNucSDIRules" onClick={() => setAllNuclearSDIRules(true)}>All Nuclear Unit and SDI Defense Unit Rules</button>
            <h2>The Official Rules for Nuclear/SDI Defense Units describe their placement, movement, orders, and applicable Treaty selections.</h2>
            <Popup trigger={ allNuclearSDIRules } setTrigger={ setAllNuclearSDIRules }>
                  <NucSDIRules />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allScoreRules" onClick={() => setAllScoreSheetRules(true)}>All Score Sheet Rules</button>
            <h2>The Deterrence Official Score Sheet v5.0.1 allows players to accurately reflect game events and record their scores to determine outcome.</h2>
            <Popup trigger={ allScoreSheetRules } setTrigger={ setAllScoreSheetRules }>
                  <ScoreRules />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allTreatyRules" onClick={() => setAllTreatyChartRules(true)}>All Treaty Negotiations Chart Rules</button>
            <h2>The Deterrence Official Treaty Negotiations Chart v5.1.1 allows players one time each per game to change Variable Rules and Points Settings.</h2>
            <Popup trigger={ allTreatyChartRules } setTrigger={ setAllTreatyChartRules }>
                  <TreatyRules />
                </Popup>
          </span>
      </div>
    </div>
  );
}

export default App;
