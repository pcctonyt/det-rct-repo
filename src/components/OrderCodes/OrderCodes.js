import React, { useState } from "react";
import "./DetCards.css";
import "./OrderCodes.css";
import BNEG from "../OrderCodeCards/BNEG";
import C from "../OrderCodeCards/C";
import DecE from "../OrderCodeCards/DecE";
import ENEG_N from "../OrderCodeCards/ENEG_N";
import ENEG_R from "../OrderCodeCards/ENEG_R";
import ENEG_Y from "../OrderCodeCards/ENEG_Y";
import IMD_S from "../OrderCodeCards/IMD_S";
import IMD_U from "../OrderCodeCards/IMD_U";
import Popup from "../Popup/Popup.js";
import R from "../OrderCodeCards/R";

const OrderCodes = () => {
const [ activateCode, setActivateCode ] = useState(false);
const [ armCode, setArmCode ] = useState(false);
const [ beginTreatyCode, setBeginTreatyCode ] = useState(false);
const [ decEnvoy, setDecEnvoy ] = useState(false);
const [ endTreatyCodeNo, setEndTreatyCodeNo ] = useState(false);
const [ endTreatyCodeFirst, setEndTreatyCodeFirst ] = useState(false);
const [ endTreatyCodeRev, setEndTreatyCodeRev ] = useState(false);
const [ illegalNo, setIllegalNo ] = useState(false);
const [ illegalYes, setIllegalYes ] = useState(false);

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
            <button id="DeclareEnvoyCode" className="order-codes-btn" onClick={() => setDecEnvoy(true)}>Declare Envoy Order Element: (E=)</button>
            <Popup trigger={ decEnvoy } setTrigger={ setDecEnvoy }>
                <DecE />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeNo" className="order-codes-btn" onClick={() => setEndTreatyCodeNo(true)}>End Treaty Negotiations No Treaty Order Element: (ENEG-N)</button>
            <Popup trigger={ endTreatyCodeNo } setTrigger={ setEndTreatyCodeNo }>
                <ENEG_N />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeRev" className="order-codes-btn" onClick={() => setEndTreatyCodeRev(true)}>End Treaty Negotiations Revised Treaty Order Element: (ENEG-R)</button>
            <Popup trigger={ endTreatyCodeRev } setTrigger={ setEndTreatyCodeRev }>
                <ENEG_R />
            </Popup>
          </span>
          <span>
            <button id="EndTreatyCodeFirst" className="order-codes-btn" onClick={() => setEndTreatyCodeFirst(true)}>End Treaty Negotiations 1st Treaty Order Element: (ENEG-Y)</button>
            <Popup trigger={ endTreatyCodeFirst } setTrigger={ setEndTreatyCodeFirst }>
                <ENEG_Y />
            </Popup>
          </span>
          <span>
            <button id="YesIllegalMove" className="order-codes-btn" onClick={() => setIllegalYes(true)}>Illegal Move Declared - Successfully Order Element: (IMD-S)</button>
            <Popup trigger={ illegalYes } setTrigger={ setIllegalYes }>
                <IMD_S />
            </Popup>
          </span>
          <span>
            <button id="NoIllegalMove" className="order-codes-btn" onClick={() => setIllegalNo(true)}>Illegal Move Declared - Unuccessfully Order Element: (IMD-U)</button>
            <Popup trigger={ illegalNo } setTrigger={ setIllegalNo }>
                <IMD_U />
            </Popup>
          </span>
    </div>
  )
}

export default OrderCodes;