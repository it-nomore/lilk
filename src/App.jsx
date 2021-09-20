import { useEffect, useState } from 'react';
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
  const [arrangeType, setArrangeType] = useState(1);

  const handleArrangeClick = () => setArrangeType((v) => { return v === 61 ? 1 : v + 1 });
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

  useEffect(() => {
    history.listen((location) => {
      const llckLoc = location.search.substr(1);
      setLLCK(llckLoc ? LLCK.inSignForm(llckLoc) : '')
      setReq(llckLoc ? LLCK.parseToQuery(LLCK.inSignForm(llckLoc)) : '')
    });
  }, [history])

  return (
    <div className="App">
      <header className="App-header">
        <button className="arrange" onClick={handleArrangeClick}>{arrangeType}</button>
        <Search llck={llck} onPull={handlePull} onSearchChange={handleSearchChange} />
      </header>
      <main className="App-main">
        <View req={req} onPull={handlePull} arrangeType={arrangeType} />
      </main>
    </div>
  );
}

export default App;
