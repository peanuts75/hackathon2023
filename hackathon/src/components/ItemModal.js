import '../App.css';

function ItemModal() {
    let name = "Generic dress"
    let price = "£15.00"
    let size = ["Small", "Medium", "Large"]
    let total = "£35.00"
    let image = require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")
    let imageDimensions = [100, 100, 100, 100]
    return (
        <div id={"item-modal"} className={"addToBag"}>
            <div className={"item-modal-item"} id={"item-modal-name"}>{name}</div>
            <div className={"container"}>
                <div className={"item-modal-item"} id={"item-modal-item-price"}>{price}</div>
                <div className={"item-modal-item"} id={"item-modal-size-dropdown"}>{size.at(1)}</div>
            </div>
            <div className={"container"}>
                <div className={"item-modal-item"}>Click here to add to cart</div>
                <div className={"item-modal-item"}>Your current total is {total}</div>
            </div>
        </div>
    )
}

export default ItemModal;