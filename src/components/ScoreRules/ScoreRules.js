import React from "react";

const ScoreRules = () => {
  return (
    <div>ScoreRules
        <h2>Possible Ways to Assign the Two Outcome Points</h2>
        <ol>
          <li>The Starting Player won the Game and both Outcome Points: 2.0 - 0.0</li>
          <li>The Starting Player won the Game and one of the two Outcome Points while sharing the other with the Responding Player: 1.5 - 0.5</li>
          <li>Both Players won one of each of the two total Outcome Points (drawn game): 1.0 - 1.0</li>
          <li>Both Players shared each of both Outcome Points (drawn game): 1.0 - 1.0</li>
          <li>The Responding Player won the Game and one of the two Outcome Points while sharing the other with the Starting Player: 0.5 - 1.5</li>
          <li>The Responding Player won the Game and both Outcome Points: 0.0 - 2.0</li>
        </ol>
    </div>
  )
}

export default ScoreRules;