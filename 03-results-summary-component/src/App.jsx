import './App.css'
import {ReactComponent as MemorySvg} from './assets/images/icon-memory.svg';
import {ReactComponent as ReactionSvg} from './assets/images/icon-reaction.svg';
import {ReactComponent as VerbalSvg} from './assets/images/icon-verbal.svg';
import {ReactComponent as VisualSvg} from './assets/images/icon-visual.svg';

function App() {

  const SummaryRow = (props) => {
    return (
      <div className="summary-row" style={{backgroundColor: `var(${props.color})`}}>
        <span className="summary-name" style={{color: `var(${props.color.replace("-pale", "")})`}}>{props.icon} {props.text}</span>
        <span className="summary-score"><strong>{props.score}</strong> / 100</span>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="left">
        <h1>Your result</h1>
        <div className="score">
          <span>76 </span>
          <span>of 100</span>
        </div>
        <div>Great</div>
        <p>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
      <div className="right">
        <h1>Summary</h1>
        <SummaryRow icon={<ReactionSvg/>} text="Reaction" score="80" color="--light-red-pale"/>
        <SummaryRow icon={<MemorySvg/>} text="Memory" score="92" color="--orangey-yellow-pale"/>
        <SummaryRow icon={<VerbalSvg/>} text="Verbal" score="61" color="--green-teal-pale"/>
        <SummaryRow icon={<VisualSvg/>} text="Visual" score="73" color="--cobalt-blue-pale"/>
        <div className="continue-btn">
          Continue
        </div>
      </div>

    </div>
  )
}

export default App
