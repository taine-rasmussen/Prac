import './App.css';

// Components
import StateHook from './Hooks/StateHook'
import EffectHook from './Hooks/EffectHook'
import MemoHook from './Hooks/MemoHook'

function App() {
  return (
    <div className="App">
      {/* <StateHook /> */}
      {/* <EffectHook /> */}
      <MemoHook />
    </div>
  );
}

export default App;
