import '../App.css';

function Mannequin() {
    return (
        <div id={"mannequin"}>
            <img src={require("./Mannequin.png")} useMap="#imagemap" alt={"mannequin"}/>
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