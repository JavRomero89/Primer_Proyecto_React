import React from "react";
import "./CreditCard.css"

const CreditCard = (props) => {

    const lastFourDigits =props.number.slice(-4)
    const expireDate = `Expires ${props.expirationMonth}/${props.expirationYear}`

    return (
        <div
            className="creditCard-box"
            style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}>
            <p className="type">{props.type}</p>
            <p className="number">{`•••• •••• •••• ${lastFourDigits}`}</p>
            <div id="bankData">
                <p className="expireFecha">{expireDate}</p>
                {/* <p className="expirationMonth">{props.expirationMonth}</p> */}
                {/* <p className="expirationYear">{props.expirationYear}</p> */}
                <p className="bank">{props.bank}</p>
            </div>
            <p className="owner">{props.owner}</p>
        </div>);
};
export default CreditCard;