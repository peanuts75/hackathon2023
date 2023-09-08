import '../App.css';

function Modal() {
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
        <>
         <head>
             <link rel="preconnect" href="https://fonts.googleapis.com" />
             <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
             <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet" />
         </head>
            <div className="modalContainer">
                <div className={'modalHeader'}>
                <h3 className="modalTitle">Bodywear</h3>
                <input type="text" placeholder="Looking for a product?" className={'searchBar'} />
                </div>
            <div className="ImageContainer">
                <div className="productImage" onDrop={drop} onDragOver={allowDrop} >
                    <img src={require("../clothes/Dresses/IG878_001.png")} alt="Cinque Terre" draggable={true} onDragStart={drag} id="drag1"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Dresses/z02ig396010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Dresses/z02jt400010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Dresses/z02xt828010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Tops/z02rr018010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Tops/z02fi508010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="productImage">
                    <img src={require("../clothes/Tops/z02vu671010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
            </div>
            </div>
        </>
    );
}

export default Modal;