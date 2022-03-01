import logo from './logo.svg';
import './App.css';

const data = ['apple', 'banana', 'orange'];

function App() {
  return (
    <div className="App">
      { data.map(v => v) } 입니다.
    </div>
  );
}

export default App;
