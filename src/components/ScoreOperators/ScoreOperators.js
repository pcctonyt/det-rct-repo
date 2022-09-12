import React from "react";

const ScoreOperators = () => {
  return (
    <div>ScoreOperators
      <h2>Score Sheet Operator Codes for Complete Turn Syntax</h2>
      <ul>
        <li>The "captures" operator:  Use Operator Code - (Unit Code)x(Captured Unit(s)'s Code(s))</li>
        <li>The "destroys" operator:  Use Operator Code - (Unit Code)z(Destroyed Unit(s)'s Code(s))</li>
        <li>The "separator" operator:  Use Operator Code - -</li>
        <li>The "move element listing" operator:  Use Operator Code - ,</li>
        <li>The "moves with" operator:  Use Operator Code - /</li>
        <li>The "checkmate" operator:  After the Move Element, Use Operator Code - #</li>
        <li>The "check" operator:  After the Move Element, Use Operator Code - +</li>
        <li>The "promotion" operator:  Use Operator Code - =</li>
        <li>The "Resignation of Position" operator:  Use Operator Code - resigns</li>
      </ul>
    </div>
  )
}

export default ScoreOperators;