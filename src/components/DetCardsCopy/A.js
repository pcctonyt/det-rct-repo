import React from "react";

const A = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Cards: Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="bold">Airdrop Units</h1>
                <div className="divider"></div>
                <p>2 for each Player at the start of the Game</p>
                <p>The Starting Player's 2 total Airdrop Units each start on square b1 and g1, the Responding Player's start on square b8 and g8 (see Official Rules:  Description of Game Board)</p>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(A)</h1> <span className="bold right lg-text">3.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">They move as the Knights in chess do (see Official Rules)</span></p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">They pair with the 2 Intermediate Nuclear Unit Types (Fixed / Mobile)</span></p>
                    <div className="divider md"></div>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">Rules for the Airdrop Units</span></p>
                    <div className="divider lg"></div>
                        <p>1. Either Airdrop Unit can be declared as an Envoy.</p>
                        <p>2. There can be only one active Envoy per player per game.</p>
                        <p className="no-divider">3. If the #2 or #3 option is selected for Promotion in the Treaty, an Infantry Unit can promote to an Airdrop Unit.</p>
                    <div className="divider md"></div>
                        <p className="note">NOTE:  During a capture move, the Airdrop Unit's Cash Value of +3.0 Points get awarded as Score Sheet Game Points to the capturing Player.  In the event that an attacking Player destroys an Airdrop Unit in a Nuclear Unit Firing Move, that Firing Player DOES NOT receive the +3.0 Points on the Score Sheet, but the other player still deducts the +3.0 Cash Value Game Points on the Score Sheet.</p>
                </div>        
        </div>
    </div>
  )
};

export default A;