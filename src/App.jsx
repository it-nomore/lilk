import { useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import View from './components/View/View';
import LLCK from './components/LLCK/LLCK';
import { useLocation, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const llckLocation = useLocation().search.substr(1);
  const [llck, setLLCK] = useState(llckLocation ? LLCK.inSignForm(llckLocation) : '');
  const [req, setReq] = useState(llckLocation ? LLCK.parseToQuery(LLCK.inSignForm(llckLocation)) : '');

  const handleSearchChange = (ch) => {
    setLLCK(ch);
  }
  const handlePull = (llck) => {
    setLLCK(llck);
    setReq(LLCK.parseToQuery(llck));
    history.push({
      search: `?${LLCK.inLitForm(llck)}`,
    });
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
