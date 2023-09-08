import Mannequin from './components/Mannequin';
import './App.css';
import Menu from "./components/Menu";
import Modal from './components/Modal'

function App() {
    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }

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
