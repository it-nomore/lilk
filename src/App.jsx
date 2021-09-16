import { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import View from './components/View/View';
import LLCK from './components/LLCK/LLCK';

function App() {
  const [llck, setLLCK] = useState('');
  const [req, setReq] = useState('');
  const handleSearchChange = (ch) => {
    setLLCK(ch);
  }
  const handlePull = (llck) => {
    setLLCK(llck);
    setReq(LLCK.parseToQuery(llck));
  }
  return (
    <div className="App">
      <header className="App-header">
        <Search llck={llck} onPull={handlePull} onSearchChange={handleSearchChange} />
      </header>
      <main className="App-main">
        <View req={req} onPull={handlePull} />
      </main>
    </div>
  );
}

export default App;
