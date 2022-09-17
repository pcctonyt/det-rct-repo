
import React, { useState } from "react";
import Captures from "../OperCodeCards/Captures";
//import Check from "../OperCodeCards/Check";
//import Checkmate from "../OperCodeCards/Checkmate";
import Destroys from "../OperCodeCards/Destroys";
//import Listing from "../OperCodeCards/Listing";
//import PairsWith from "../OperCodeCards/PairsWith";
import "./DetCards.css";
import "./OperatorCodes.css";
import Popup from "../Popup/Popup.js";
//import Promotion from "../OperCodeCards/Promotion";
//import Separator from "../OperCodeCards/Separator";

const OperatorCodes = () => {
  const [ capturesCode, setCapturesCode ] = useState(false);
  //const [ checkCode, setCheckCode ] = useState(false);
  //const [ checkmateCode, setCheckmateCode ] = useState(false);
  const [ destroysCode, setDestroysCode ] = useState(false);
  //const [ listingCode, setListingCode ] = useState(false);
  //const [ pairsWithCode, setPairsWithCode ] = useState(false);
  //const [ promotionCode, setPromotionCode ] = useState(false);
  
  return (
    <div>
        <h2> Operator Codes:  Click a button below for all of the information on that Score Sheet Operator type!</h2>
          <span>
            <button id="CapturesCode" className="operator-codes-btn" onClick={() => setCapturesCode(true)}>Capture Operator: (x)</button>
            <Popup trigger={ capturesCode } setTrigger={ setCapturesCode }>
                <Captures />
            </Popup>
          </span>
          <span>
            <button id="DestroysCode" className="operator-codes-btn" onClick={() => setDestroysCode(true)}>Destroys Operator: (z)</button>
            <Popup trigger={ destroysCode } setTrigger={ setDestroysCode }>
                <Destroys />
            </Popup>
          </span>
          {/*
          <span>
            <button id="CheckCode" className="operator-codes-btn" onClick={() => setCheckCode(true)}>Check Operator: (+)</button>
            <Popup trigger={ checkCode } setTrigger={ setCheckCode }>
                <Check />
            </Popup>
          </span>
          <span>
            <button id="CheckmateCode" className="operator-codes-btn" onClick={() => setCheckmateCode(true)}>Checkmate Operator: (#)</button>
            <Popup trigger={ checkmateCode } setTrigger={ setCheckmateCode }>
                <Checkmate />
            </Popup>
          </span>
          
          <span>
            <button id="ListingCode" className="operator-codes-btn" onClick={() => setListingCode(true)}>Listing Operator: (,)</button>
            <Popup trigger={ listingCode } setTrigger={ setListingCode }>
                <Listing />
            </Popup>
          </span>
          <span>
            <button id="PairsWithCode" className="operator-codes-btn" onClick={() => setPairsWithCode(true)}>Pairs With Operator: (/)</button>
            <Popup trigger={ pairsWithCode } setTrigger={ setPairsWithCode }>
                <PairsWith />
            </Popup>
          </span>
          <span>
            <button id="PromotionCode" className="operator-codes-btn" onClick={() => setPromotionCode(true)}>Promotion Operator: (=)</button>
            <Popup trigger={ promotionCode } setTrigger={ setPromotionCode }>
                <Promotion />
            </Popup>
          </span>
          <span>
            <button id="SeparatorCode" className="operator-codes-btn" onClick={() => setSeparatorCode(true)}>Separator Operator: (-)</button>
            <Popup trigger={ separatorCode } setTrigger={ setSeparatorCode }>
                <Separator />
            </Popup>
  </span> */}
    </div>
  )
}

export default OperatorCodes;
