import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(1);

  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
