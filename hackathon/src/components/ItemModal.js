import '../App.css';

function ItemModal() {
    let name = "generic shirt"
    let price = "£15.00"
    let size = ["small", "medium", "large"]
    let total = "£35.00"
    let image = require("../clothes/Dresses/z02fj718010s 14-06-2023_Batch 1 of 1.jpg")
    let imageDimensions = [100, 100, 100, 100]
    return (
        <div id={"item-modal"}>
            <div className={"item-modal-item"} id={"item-modal-name"}>{name}</div>
            <div className={"item-modal-item"} id={"item-modal-item-price"}>{price}</div>
            <div className={"item-modal-item"} id={"item-modal-size-dropdown"}>{size.at(1)}</div>
            <div className={"item-modal-item"} id={"item-modal-add-to-cart"}>Add to cart placeholder button, total at {total}</div>
            <div className={"item-modal-item"} id={"item-modal-image"}><img src={image} alt={"alt text"} style={{left:imageDimensions.at(0), top:imageDimensions.at(1), width:imageDimensions.at(2), height:imageDimensions.at(3)}}/></div>
        </div>
    )
}

export default ItemModal;