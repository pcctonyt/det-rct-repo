import React from "react";

const ScoreRules = () => {
  return (
    <div>ScoreRules
        <h2>Possible Ways to Assign the Two Outcome Points at the end of the game:</h2>
        <h3>In the game of chess, the players compete for only one Outcome Point, which refers to the outcome of the position.  However, in Deterrence, an additional second Outcome Point refers to the outcome of the Game Points portion of the game.  The Player with the greater total of Game Points, of course, wins the second Outcome Point at the conclusion of the game.  There are two types of Game Points.  The Score Sheet Game Points refer to "scored" points that change the Score at that point in the game.  The Cash Value Game Points reflect Units' values that have yet to be removed from the Game Board via capture/destroy Move Elements.  Each Player's Cash Value Game Points Total gets added to that Player's Score Sheet Game Points Total when the position of the game has been determined, at which point the game ends.</h3>
        <ol>
          <li>The Starting Player won the Game and both Outcome Points: 2.0 - 0.0</li>
          <li>The Starting Player won the Game and one of the two Outcome Points while sharing the other with the Responding Player: 1.5 - 0.5</li>
          <li>Both Players won one of each of the two total Outcome Points (drawn game): 1.0 - 1.0</li>
          <li>Both Players shared each of both Outcome Points (drawn game): 1.0 - 1.0</li>
          <li>The Responding Player won the Game and one of the two Outcome Points while sharing the other with the Starting Player: 0.5 - 1.5</li>
          <li>The Responding Player won the Game and both Outcome Points: 0.0 - 2.0</li>
        </ol>
        <h2>Score Sheet Rules</h2>
        <h3>Move Elements versus Complete Turns:</h3>
        <h4>A Complete Turn can contain one, two, or three Move Elements listed within that Complete Turn.  All of these Move Elements occur during that Player's current Complete Turn.  In the game of chess, the term "move" refers to a Player's turn, since all turns only have one move.  However, in Deterrence, some turns can have two (usually for turns involving movement of Mobile Nuclear and/or Mobile SDI Defense Units, or Arming of previously Activated Nuclear Units) or three (turns where Protect the President Move Elements occur) Move Elements within them.  The "Move Element Listing" operator (,) is used to separate Move Elements on the Score Sheet.</h4>
    </div>
  )
}

export default ScoreRules;