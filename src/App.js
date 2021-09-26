import './App.css';
import Header from './Component/Header/Header';
import LoadProgrammers from './Component/LoadProgrammers/LoadProgrammers';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='bodyWrapper'>
        <LoadProgrammers />
      </main>
    </div>
  );
}

export default App;
