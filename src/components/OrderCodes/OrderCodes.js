import React, { useState } from "react";
import "./DetCards.css";
import "./OrderCodes.css";
import BNEG from "../OrderCodeCards/BNEG";
import C from "../OrderCodeCards/C";
import ENEG_N from "../OrderCodeCards/ENEG_N";
import Popup from "../Popup/Popup.js";
import R from "../OrderCodeCards/R";

const OrderCodes = () => {
const [ activateCode, setActivateCode ] = useState(false);
const [ armCode, setArmCode ] = useState(false);
const [ beginTreatyCode, setBeginTreatyCode ] = useState(false);
const [ endTreatyCodeNo, setEndTreatyCodeNo ] = useState(false);

  return (
    <div>
        <h2>Order Codes:  Click a button below for all of the information on that Order Element type!</h2>
          <span>
            <button id="ActivateCode" className="order-codes-btn" onClick={() => setActivateCode(true)}>Activate Order Element: (C)</button>
            <Popup trigger={ activateCode } setTrigger={ setActivateCode }>
                <C />
            </Popup>
          </span>
          <span>
            <button id="ArmCode" className="order-codes-btn" onClick={() => setArmCode(true)}>Arm Order Element: (R)</button>
            <Popup trigger={ armCode } setTrigger={ setArmCode }>
                <R />
            </Popup>
          </span>
          <span>
            <button id="BeginTreatyCode" className="order-codes-btn" onClick={() => setBeginTreatyCode(true)}>Begin Treaty Negotiations Order Element: (BNEG)</button>
            <Popup trigger={ beginTreatyCode } setTrigger={ setBeginTreatyCode }>
                <BNEG />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeNo" className="order-codes-btn" onClick={() => setEndTreatyCodeNo(true)}>End Treaty Negotiations No Treaty Order Element: (ENEG-N)</button>
            <Popup trigger={ endTreatyCodeNo } setTrigger={ setEndTreatyCodeNo }>
                <ENEG_N />
            </Popup>
          </span>

        <ul>
          <li>Beginning Treaty Negotiations:  Use Order Code - BNEG</li>
          <li>Ending Treaty Negotiations (no agreement):  Use Order Code - ENEG-N</li>
          <li>Ending Treaty Negotiations (valid treaty):  Use Order Code - ENEG-Y</li>
          <li>Ending Treaty Negotiations (2nd treaty revising 1st):  Use Order Code - ENEG-R</li>
          <li>Declaring an Envoy:  Use Order Code - E=(square code)</li>
          <li>Illegal Move Element(s) Declared Unsuccessfully:  Use Order Code - IMD-U</li>
          <li>Illegal Move Element(s) Declared Successfully:  Use Order Code - IMD-S</li>
          <li>Deploy a Nuclear Unit to the Game Board:  Use Order Code - D-(Unit Code)(square code)</li>
          <li>Fire a previously Armed Nuclear Unit:  Use Order Code - F-(Unit Code)z(square codes to be destroyed)</li>
          <li>Purchase an SDI Defense Unit: Use Order Code - B-(Unit Code)(square code)</li>
          <li>Cross a border (Border Breach) into the opponent's territory: After the rest of the Move Element, Use Order Code - -BB</li>
        </ul>
    </div>
  )
}

export default OrderCodes;