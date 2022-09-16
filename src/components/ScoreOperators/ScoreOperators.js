import React from "react";

const ScoreOperators = () => {
  return (
    <div>ScoreOperators
      <h2>Score Sheet Operator Codes for Complete Turn Syntax (the parentheses do not get used)</h2>
      <ul>
        <li>The "captures" operator:  Use Operator Code (x) as follows: (Unit Code)x(Captured Unit(s)'s Code(s))</li>
        <li>The "destroys" operator:  Use Operator Code (z) as follows: (Unit Code)z(Destroyed Unit(s)'s Code(s))</li>
        <li>The "separator" operator:  Use Operator Code (-)</li>
        <li>The "listing" operator:  Use Operator Code (,)</li>
        <li>The "pairs with" operator:  Use Operator Code (/) as follows: (Paired Unit)/(Paired Unit)</li>
        <li>The "checkmate" operator:  After the Move Element, Use Operator Code (#)</li>
        <li>The "check" operator:  After the Move Element, Use Operator Code (+)</li>
        <li>The "promotion" operator:  Use Operator Code (=)</li>
        <li>The "resignation" operator:  Use Operator Code (resigns)</li>
      </ul>
    </div>
  )
}

export default ScoreOperators;