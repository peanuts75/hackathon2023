import '../App.css';

function Menu() {
    return (
        <div id={"menu"}>
            <div className={"menu-item"} id={"dress-menu"}>
                    Dresses
            </div>
            <div className={"menu-item"} id={"tops-menu"}>
                    Tops
            </div>
            <div className={"menu-item"} id={"bottoms-menu"}>
                    Bottoms
            </div>
            <div className={"menu-item"} id={"accessories-menu"}>
                    Accessories
            </div>
            <div className={"menu-item"} id={"shoes-menu"}>
                    Shoes
            </div>
            <div className={"menu-item"} id={"total"}>
                   £0.00 to buy this outfit
            </div>
            <div className={"menu-item"} id={"checkout"}>
                    Buy it now!
            </div>
            <div className={"menu-item"} id={"collapse"}>
                    Collapse menu
            </div>

        </div>
    )

}

export default Menu