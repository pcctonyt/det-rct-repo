import React, { useState } from "react";
import Popup from "./components/Popup/Popup";
import ConvUnitCodes from "./components/AllUnitCodes/ConvUnitCodes";
import NucUnitCodes from "./components/AllUnitCodes/NucUnitCodes";
import SDIUnitCodes from "./components/AllUnitCodes/SDIUnitCodes";
import OrderCodes from "./components/OrderCodes/OrderCodes";
import MoveCodes from "./components/MoveCodes/MoveCodes";
import ScoreOperators from "./components/ScoreOperators/ScoreOperators";
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
            <button className="deterrence-app-btn" id="allUnits" onClick={() => setAllUnitCodes(true)}>All Unit Codes</button>
            <Popup trigger={ allUnitCodes } setTrigger={ setAllUnitCodes }>
                  <ConvUnitCodes />
                  <NucUnitCodes />
                  <SDIUnitCodes />                
            </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allOrders" onClick={() => setAllOrderCodes(true)}>All Order Codes</button>
            <Popup trigger={ allOrderCodes } setTrigger={ setAllOrderCodes }>
                  <OrderCodes />
            </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allMoves" onClick={() => setAllMoveCodes(true)}>All Movement Codes</button>
            <Popup trigger={ allMoveCodes } setTrigger={ setAllMoveCodes }>
                  <MoveCodes />
            </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allScoreOpers" onClick={() => setAllScoreOpersCodes(true)}>All Score Sheet Operator Codes</button>
            <Popup trigger={ allScoreOpersCodes } setTrigger={ setAllScoreOpersCodes }>
                  <ScoreOperators />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allConvRules" onClick={() => setAllConventionalRules(true)}>All Conventional Unit Rules</button>
            <Popup trigger={ allConventionalRules } setTrigger={ setAllConventionalRules }>
                  <ConvUnitRules />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allNucSDIRules" onClick={() => setAllNuclearSDIRules(true)}>All Nuclear Unit and SDI Defense Unit Rules</button>
            <Popup trigger={ allNuclearSDIRules } setTrigger={ setAllNuclearSDIRules }>
                  <NucSDIRules />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allScoreRules" onClick={() => setAllScoreSheetRules(true)}>All Score Sheet Rules</button>
            <Popup trigger={ allScoreSheetRules } setTrigger={ setAllScoreSheetRules }>
                  <ScoreRules />
                </Popup>
          </span>
          <span className="deterrence-app-btn-wrapper">
            <button className="deterrence-app-btn" id="allTreatyRules" onClick={() => setAllTreatyChartRules(true)}>All Treaty Rules</button>
            <Popup trigger={ allTreatyChartRules } setTrigger={ setAllTreatyChartRules }>
                  <TreatyRules />
                </Popup>
          </span>
      </div>
    </div>
  );
}

export default App;
