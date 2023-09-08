import Mannequin from './components/Mannequin';
import './App.css';
import Menu from "./components/Menu";
import ItemModal from "./components/ItemModal";
import Modal from './components/Modal'
import Fetch_db from './lib/dynamodb';
import React, { useState } from 'react';

const fetchData = async () => {
  try {
    const response = Fetch_db();

    console.log("Response " + response)
    
    return response;
  } catch (e) {
    console.log(e);
  }
};

function App() {

    const style = {
        'animation-duration': '5s'
    }

    const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
          <div className={'logo'}>
              <img src={require("./MicrosoftTeams-image (9).png")} alt='logo' className={'logo'} />
          </div>
        <div className={"mannequinContainer"}>
            <a onClick={() => setModalVisibility(true)} className={'mannequinButton'}>
                <Mannequin></Mannequin>
            {modalVisibility && (
                <Modal style={style}></Modal>
                )}
            </a>
        </div>
          <div classname={'addToBagContainer'}>
              <ItemModal></ItemModal>
          </div>
        {/*<button onClick={fetchData}>*/}
        {/*    scan*/}
        {/*</button>*/}
      </header>
    </div>
  );
}

export default App;
