import React from "react";

const ENEG_N = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Order Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">End Treaty Negotiations No Treaty Order Code</h1>
                <div className="divider"></div>
                <p>This Order Code indicates when a Player ends Treaty Negotiations requested from the other Player and a Treaty is NOT AGREED TO.  The Player using this Order Code either rejects a Treaty outright or the negotaitions do not produce a valid Treaty (where both players agree to make EXACTLY THE SAME changes).  This Order Code ALWAYS COUNTS as one COMPLETE TURN, since the immediate Turn resumes the Game as usual.</p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use to:</span></p>
                    <h1>(ENEG-N)</h1> <span className="right lg-text">End Treaty Negotiations (no treaty)</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <div className="divider"></div>
                        <p><span className="bold">The End Treaty Negotiations No Treaty Order Code does not have a Points Rule:</span></p>
                        <div className="divider"></div>
                        <p><span className="bold">Answering Player's options:</span><span className="right"></span></p>
                        <p>1.  Refuse to implement a Treaty outright (ENEG-N) (preserves the Default Settings)</p>
                        <p>2.  Not agree to one, some, or all of what the Asking Player wishes to change (ENEG-N) (preserves the Default Settings on the 1st round of negotiations, preserves the existing settings on the second round)</p>
                        <p>3.  Both Players reach an agreement on EXACTLY THE SAME changes to be made and a Treaty is therefore adopted ((ENEG-Y) for the 1st round of negotiations, (ENEG-R) for the 2nd round).</p>
                        <p className="bold"><span className="bold">There are no Variable Rules for Begin Treaty Negotiations Order Elements</span></p>
                </div>        
        </div>
    </div>
  )
};

export default ENEG_N;