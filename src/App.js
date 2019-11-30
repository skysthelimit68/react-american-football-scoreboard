//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(0);

  const updateScore = (team, score) => {
    switch(team){
      case "home":
        setHomeScore(homeScore + score);
        break;
      case "away":
        setAwayScore(awayScore + score);
        break;
      default:
        break;
    }

    /*if(team === "home") setHomeScore(homeScore + score)
    if(team === "away") setAwayScore(awayScore + score)*/
  }
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter = {quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {() => updateScore("home", 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {() => updateScore("home", 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {() => updateScore("away", 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {() => updateScore("away", 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div>
          <button onClick = {() => {
            if(quarter < 4) setQuarter(quarter + 1)
          }}>Set Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
