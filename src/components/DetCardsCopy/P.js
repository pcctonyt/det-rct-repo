import React from "react";

const P = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Cards: Conventional Units</h1>
        <div className="label">
            <header>
                <h1 className="bold">President Unit</h1>
                <div className="divider"></div>
                <p>Up to 1 each side per game</p>
                <p className="bold">Unit Type: <span className="right">Conventional Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(P)</h1> <span className="bold right lg-text">0.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">Movement:</span><span className="bold right">Moves as the King in chess does(see Official Rules)</span></p>
                        <p className="indent no-divider"><strong className="bold">See Protection-Short (O-O) or Protection-Long (O-O-O) in Official Rules for Protection Move Rules</strong> <span className="right"></span></p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">Pairs With the Strategic Nuclear Unit</span></p>
                    <div className="divider md"></div>
                        <p><span className="bold">Variable Rules:</span> <span className="right bold">Default Setting:</span></p>
                        <p className="indent no-divider"><i>Protection</i> moves allowed:<span className="bold right">Yes</span></p>
                        <p className="indent no-divider"><i>Checkmate Bonus</i><span className="bold right">+10.0</span></p>
                        <p className="indent no-divider"><i>Resigning Game Penalty</i><span className="bold right">-10.0</span></p>
                        <p className="indent">Captured if left in check: <span className="bold right">No</span></p>
                        <p className="indent no-divider">Points Penalty if Destroyed by Nuclear Unit:<span className="right bold">-10.0</span></p>
                    <div className="divider"></div>
                        <p className="no-divider"><span className="bold">Rules for the President Unit</span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">Similar to the King in chess</span></p>
                    <div className="divider lg"></div>
                        <p>1. The President can Arm Nuclear Units</p>
                        <p>2. The game ends upon the 1st President being checkmated or destroyed in a Nuclear Unit Firing Move being nuked), at which time all Game Points are tabulated.</p>
                        <p className="no-divider">3. An Infantry cannot promote to a President.</p>
                        <p className="no-divider"><span className="bold">Arming Nuclear Units:</span></p>
                    <div className="divider lg"></div>
                        <p>1. Only Units on adjacent squares.</p>
                        <p>1. Units must already be Activated.</p>
                        <p>2. Does <strong>NOT</strong> count as Complete Turn during Protection moves.</p>
                        <p className="no-divider">3. The President does not need to be declared a separate Envoy.</p>
                    <div className="divider md"></div>
                        <p className="note">The value of the President depends on the total of any Checkmate Points Bonus and Nuclear Firing Points Penalties.  The Default Settings are +10.0 and -10.0, respectively. The President has no Cash Value.</p>
                </div>        
        </div>
    </div>
  )
};

export default P;