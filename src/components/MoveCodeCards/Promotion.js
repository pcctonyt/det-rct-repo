import React from "react";

const Promotion = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Deterrence Move Element Codes</h1>
        <div className="label">
            <header>
                <h1 className="text-center bold">Promotion Move Element Code</h1>
                <div className="divider"></div>
                <p>This Code allows  </p>
                <div className="divider"></div>
                <p className="bold">Code Type: <span className="right">Order Code</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Use with:</span></p>
                    <h1>((square code)=)</h1> <span className="right lg-text">Infantry Units</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                    <div className="divider"></div>
                        <p><span className="bold">When a brave Infantry Unit reaches the back starting rank of the opposing Player (rank 8 for Starting and rank 1 for Responding), the Infantry is removed from the Game Board.  Depending upon Treaty selection, promotion conditions then apply.  The Default Setting is:  Promotion to any type of Conventional Unit besides the President Unit.</span></p>
                        <p><span className="bold">How to record on the Score Sheet.</span><span className="right">Use the (=) Operator Code with the final square code to the left to indicate Promotion.</span></p>
                        <div className="divider"></div>
                        <p className="no-divider"><span className="bold"></span></p>
                    <div className="divider lg"></div>
                        <p className="no-divider"><span className="bold">Selection 1. No promotion.  The Infantry Unit reaching the opposite end of the Game Board allows that Player to apply +2.0 Score Sheet Game Points for each Infantry reaching the final rank.  If the Infantry also is carrying a Mobile Tactical Nuclear Unit, that Unit allow that Player to record +8.0 Score Sheet Game Points to the total.  Both Units are then removed from the Game Board.</span></p>
                        <p className="no-divider"><span className="bold">Selection 1. No promotion.  The Infantry Unit reaching the opposite end of the Game Board allows that Player to apply +2.0 Score Sheet Game Points for each Infantry reaching the final rank.  If the Infantry also is carrying a Mobile Tactical Nuclear Unit, that Unit allow that Player to record +8.0 Score Sheet Game Points to the total.  Both Units are then removed from the Game Board.</span></p>
                        <p className="no-divider"><span className="bold">Selection 3 (Default Setting). Promotion to all other Units (even multiple Units) besides the President.  The Infantry Unit reaching the opposite end of the Game Board allows that Player to replace that Infantry with a new Conventional Unit other than the President, even if one or more of those specific Units already is/are on the Game Board.  Use the new Unit Code to the right of the (=) on the Score Sheet.  The difference </span></p>
                    <div className="divider lg"></div>
                        <p className="note">NOTE:  The Declare Envoy Order Element is only available to be NOT ITSELF a Complete Turn during Complete Turns which include Protect the President Move Elements, so long as that Player declares the Lieutenant used in that Protection move as the Envoy during that Complete Turn.  Score Sheet Complete Turn entry example: <em>E=d1</em>  A General (or other qualifying Unit, for that matter) resting on square d1 is now that Player's new Envoy, and is referred to as "the Envoy" henceforth. ANOTHER EXAMPLE (two ways to record the Complete Turn): 1. O-O,<em>E=f1</em> or 2. <em>E=h1</em>,O-O  The Starting Player Protects his/her President Short Side while declaring that Lieutenant to be that Player's new Envoy, and that Unit is referred to as "the Envoy" henceforth.  Both Score Sheet Complete Turn entries are legal in this case.</p>
                </div>        
        </div>
    </div>
  )
};

export default Promotion;