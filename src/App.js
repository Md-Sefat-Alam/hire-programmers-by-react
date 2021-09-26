import { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import LoadProgrammers from './Component/LoadProgrammers/LoadProgrammers';

function App() {
  const [selectedProg, setSelectedProg] = useState([])

  //  collect data from  cartClickSelect and send it header part
  const cartClickSelect = (selectBtnData) => {
    setSelectedProg(selectBtnData);
  }

  return (
    <div className="App">
      {/* adding site header */}
      <Header selectedProg={selectedProg} />
      <main className='bodyWrapper'>
        <LoadProgrammers cartClickSelect={cartClickSelect} />
      </main>
    </div>
  );
}

export default App;
