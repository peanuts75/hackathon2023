import '../App.css';
import React, { useState } from 'react';

function Mannequin() {

    const [visible, setVisibility] = useState(false);

    const style = (
        !visible ? {visibility: 'hidden'} : {visibility: 'visible'}
    )

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
        ev.preventDefault();
        setVisibility(true);
    }

    return (
        <div id={"mannequin"} onDrop={drop} onDragOver={allowDrop}>
            <img className={'productDrop'} src={require('../clothes/Dresses/IG878_001.png')} style={style}/>
            <img src={require("../mannequin-image.png")} useMap="#imagemap" alt={"mannequin"} className={'mannequinImage'}/>
            <map name="imagemap">
                <area target="" alt="top" title="top" href="#top" coords="358,366,95,218" shape="rect"/>
                <area target="" alt="mid" title="mid" href="#mid" coords="96,367,370,523" shape="rect"/>
                <area target="" alt="bottom" title="bottom" href="#bottom" coords="106,523,385,990" shape="rect"/>
                <area target="" alt="shoes" title="shoes" href="#shoes" coords="199,991,272,1128" shape="rect"/>
            </map>
        </div>
    );
}

export default Mannequin;