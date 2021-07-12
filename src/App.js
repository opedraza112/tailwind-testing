import './App.css';
import CountDownTimer from './components/CountDownTimer';
import PageBanner from './components/PageBanner';
import GoalContainer from './components/GoalContainer';

function App() {
  return (
    <div className="App">
      <CountDownTimer />
      <PageBanner />
      <GoalContainer />
    </div>
  );
}

export default App;
