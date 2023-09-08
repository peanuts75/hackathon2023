import Mannequin from './components/Mannequin';
import './App.css';
import Menu from "./components/Menu";
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={'logo'}>
              <img src={require("./MicrosoftTeams-image (9).png")} alt='logo' className={'logo'} />
          </div>
        <div className={"mannequinContainer"}>
            <Mannequin></Mannequin>
            <Modal></Modal>
        </div>
      </header>
    </div>
  );
}

export default App;
