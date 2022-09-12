import React from "react";

const OrderCodes = () => {
  return (
    <div>OrderCodes
        <h2>Order Codes</h2>
        <ul>
          <li>Beginning Treaty Negotiations:  Use Order Code - BNEG</li>
          <li>Ending Treaty Negotiations (no agreement):  Use Order Code - ENEG-N</li>
          <li>Ending Treaty Negotiations (valid treaty):  Use Order Code - ENEG-Y</li>
          <li>Ending Treaty Negotiations (2nd treaty revising 1st):  Use Order Code - ENEG-R</li>
          <li>Declaring an Envoy:  Use Order Code - E=(square code)</li>
          <li>Illegal Move Element(s) Declared Unsuccessfully:  Use Order Code - IMD-U</li>
          <li>Illegal Move Element(s) Declared Successfully:  Use Order Code - IMD-S</li>
          <li>Deploy a Nuclear Unit to the Game Board:  Use Order Code - D-(Unit Code)(square code)</li>
          <li>Activate a previously Deployed Nuclear Unit:  Use Order Code - C-(Unit Code)(square code)</li>
          <li>Arm a previously Activated Nuclear Unit:  Use Order Code - R-(Unit Code)(square code)</li>
          <li>Fire a previously Armed Nuclear Unit:  Use Order Code - F-(Unit Code)z(square codes to be destroyed)</li>
          <li>Purchase an SDI Defense Unit: Use Order Code - B-(Unit Code)(square code)</li>
          <li>Cross a border (Border Breach) into the opponent's territory: After the rest of the Move Element, Use Order Code - -BB</li>
          <li></li>
        </ul>
    </div>
  )
}

export default OrderCodes;