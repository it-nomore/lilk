import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search/Search';
import View from './components/View/View';
import LLCK from './components/LLCK/LLCK';
import { useLocation, useHistory } from "react-router-dom";
import Settings from './components/Settings/Settings';

function App() {
  const history = useHistory();
  const llckLocation = useLocation().search.substr(1);
  const [llck, setLLCK] = useState(llckLocation ? LLCK.inSignForm(llckLocation) : '');
  const [req, setReq] = useState(llckLocation ? LLCK.parseToQuery(LLCK.inSignForm(llckLocation)) : '');
  const [arrange, setArrange] = useState({
    direction: 'row',
    wrap: 'wrap',
    justify: 'center',
    items: 'center',
    content: 'start',
    options: false,
  });
  const [isSettings, setIsSettings] = useState(false);

  const handleArrangeChange = (arrange) => setArrange(arrange);
  const handleSettingsSwitcherClick = () => setIsSettings((flag) => !flag);
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
        {/* <button className="arrange" onClick={handleArrangeClick}>{arrangeType}</button> */}
        <div className="Header-up">
          <button className="settings-switcher" onClick={handleSettingsSwitcherClick}></button>
          <Search llck={llck} onPull={handlePull} onSearchChange={handleSearchChange} />
        </div>
        <Settings onArrangeChange={handleArrangeChange} display={isSettings} />
      </header>
      <main className="App-main">
        <View req={req} onPull={handlePull} arrange={arrange} />
      </main>
    </div>
  );
}

export default App;
