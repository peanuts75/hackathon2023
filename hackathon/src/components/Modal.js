import '../App.css';

function Modal() {
    return (
        <>
            <div className="modalContainer">
                <h3 className="modalTitle">Title</h3>
            </div>
            <div className="scroll-container">
                <div className="slide">
                    <img src={require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="slide">
                    <img src={require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="slide">
                    <img src={require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
                <div className="slide">
                    <img src={require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")} alt="Cinque Terre"/>
                </div>
            </div>
        </>
    );
}

export default Modal;