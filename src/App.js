import './App.css';
import CountDownTimer from './components/CountDownTimer';
import PageBanner from './components/PageBanner';
import GoalContainer from './components/GoalContainer';
import TrainingList from './components/TrainingList';

function App() {
  return (
    <div className="App">
      <CountDownTimer />
      <PageBanner />
      <GoalContainer />
      <TrainingList />
    </div>
  );
}

export default App;
