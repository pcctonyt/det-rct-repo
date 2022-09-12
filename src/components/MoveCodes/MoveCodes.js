import React from "react";

const MoveCodes = () => {
  return (
    <div>MoveCodes
        <h2>Movement Codes</h2>
        <ul>
          <li>Moving a Conventional Unit besides the Infantry Unit:  Use that Unit's Unit Code followed by the destination square's Square Code</li>
          <li>Moving an Infantry Unit: Use the destination square's Square Code</li>
          <li>If a Conventional Unit carries a Mobile Nuclear or Mobile SDI Defense Unit, separate their Unit Codes with a (/)</li>
          <li>Handing Off:  Use Movement Code - HO</li>
          <li>Picking Up:  Use Movement Code - PU</li>
          <li>Dropping Off:  Use Movement Code - DO</li>
          
          <li></li>
        </ul>
    </div>
  )
}

export default MoveCodes;