import React from "react";

const Infantry = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Cards: Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="bold">Infantry Units</h1>
                <div className="divider"></div>
                <p>8 for each Player at the start of the Game</p>
                <p>The Starting Player's 8 total Infantry Units each start on squares a2, b2, c2, d2, e2, f2, g2, and h2, the Responding Player's start on square a7, b7, c7, d7, e7, f7, g7, and h7 (see Official Rules:  Description of Game Board)</p>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(no code)</h1> <span className="bold right lg-text">1.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">They move as the Pawns in chess do (see Official Rules)</span></p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">They pair with the 2 Intermediate Nuclear Unit Types (Fixed / Mobile)</span></p>
                    <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">Promotion Rules for the Infantry Units</span></p>
                    <div className="divider md"></div>
                        <p className="no-divider">Selection 1.  No Promotion</p>
                        <p className="no-divider">Selection 2.  Promotion Only to Captured Units</p>
                        <p className="no-divider">Selection 3.  Promotion to Any Unit Besides the President</p>
                    <div className="divider md"></div>
                        <p className="no-divider"><span className="bold">Rules for the Infantry Units</span></p>
                    <div className="divider lg"></div>
                        <p>1. An Infantry Unit may not be declared as an Envoy.</p>
                        <p className="no-divider">3. If the #2 or #3 option is selected for Promotion in the Treaty, an Infantry Unit can promote, depending upon Treaty Selection  (see Official Rules:  Infantry Promotion, for more information).</p>
                    <div className="divider md"></div>
                        <p className="note">NOTE:  During a capture move, the Infantry Unit's Cash Value of +1.0 Point get awarded as Score Sheet Game Points to the capturing Player.  In the event that an attacking Player destroys an Infantry Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the +1.0 Point on the Score Sheet, but the other player still deducts the +1.0 Cash Value Game Point on the Score Sheet.</p>
                </div>        
        </div>
    </div>
  )
};

export default Infantry;