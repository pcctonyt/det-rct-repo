import React from "react";

const D = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Movement Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Deploy Movement Code</h1>
                <div className="divider"></div>
                <p>Unlike the other Order Codes Activate (C) and Arm (R), but like the Fire (F) Movement Code associated with Nuclear Units, the Deploy Movement Code changes the position by allowing Nuclear Units to be placed on the Game Board.  This Code also describes which square the Nuclear Unit is placed on.  This code is NOT USED for SDI Defense Unit placement ( use Buy (B) instead)</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Movement Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Units Being Placed:</span></p>
                    <h1>(D)</h1> <span className="right lg-text">MTN, MIN, FTN, FIN, SN</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When to use:</span><span className="right">The Player wishing to place a Nuclear Unit of either Fixed or Mobile type uses this Movement Code on the Score Sheet during that Complete Turn.  The Deploy Code ALWAYS COUNTS as ONE COMPLETE TURN, allowing no other Move Elements during that Turn.  Use Deploy (D) during Turns #1-#10 inclusive to deploy a Tactical Nuclear Unit, during Turns #11-#20 inclusive for an Intermediate Nuclear Unit, and during Turns #21-#30 for the Strategic Nuclear Unit.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Deploy Points Rule:</span><span className="right">The Deploy Move Element is subject to application of Points depending upon the outcome of Treaty negotiations.  The Default Setting is 0.0 Points.</span></p>
                    <div className="divider"></div>
                        <p><span className="bold">Where to Deploy:</span><span className="right">Only Infantry Units can receive new deployed Tactical Nuclear Units of either type to their current resting squares.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Where to Deploy:</span><span className="right">Only Units other than Infantry or the President Unit can receive new deployed Intermediate Nuclear Units of either type to their current resting squares.</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Where to Deploy:</span><span className="right">Only the President Unit can receive a new deployed Strategic Nuclear Unit to its current resting square.</span></p>
                        <div className="divider"></div>
                        <p className="bold"><span className="bold">There are no Variable Rules or Points Settings available for change for Deploy Move Elements within the Treaty Negotiations Chart</span></p>
                    <div className="divider lg"></div>
                        <p className="note">In the event that the players agree during Treaty negotiations that using Nuclear and SDI Defense Units is to be illegal (see Treaty: Section Two), any Order Codes and Movement Codes related to Nuclear/SDI Defense Units are then therefore illegal, and then the Illegal Move Declared - Successfully (IMD-S, itself the opposing Player's next Complete Turn) can be used by the opposing Player ONLY IMMEDIATELY AFTER the Complete Turn containing the "declared illegal" element being challenged.  That Player then records any applicable Points Setting to his/her Score (Default: +5.0 Points) and that Player has recorded one Strike towards the opposing Player, and the first Player's entire Complete Turn must be retracted, and the initial Player then attempts a new Complete Turn.  A Player must earn three Strikes to automatically end the game and automatically win both Outcome Points.  See Deterrence Official Rules:  Illegal Move Declarations, for more information</p>
                </div>        
        </div>
    </div>
  )
};

export default D;