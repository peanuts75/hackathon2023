import Mannequin from './components/Mannequin';
import './App.css';
import Menu from "./components/Menu";
import ItemModal from "./components/ItemModal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className={'logo'}>
              <img src={require("./MicrosoftTeams-image (9).png")} alt='logo' className={'logo'} />
          </div>
        <div className={"container"}>
          <Mannequin></Mannequin>
          <ItemModal></ItemModal>
        </div>
      </header>
    </div>
  );
}

export default App;
