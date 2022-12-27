import React from "react";

const CreditCard = (props) => {
    const divStyle = {
        color : `${props.color}`,
        background: `${props.bgColor}`,
    }
const maskCardNumber = () => {
    let fourLastNumber = []
    let cardNumber = props.number.split("")
    for(let i=cardNumber.length-4;i<cardNumber.length;i++){
        fourLastNumber.push(cardNumber[i])
    }

    return `•••• •••• •••• ${fourLastNumber.join("")}`
}

    
    return (
        <div className="CreditCard" style={divStyle}>

        <img className="typeCard" src={props.type==='Visa'?'/img/visa.png':'/img/master-card.svg'} alt="typeCard"/>
        <div>{maskCardNumber()}</div>
        <p>Expires {props.expirationMonth}/{props.expirationYear-2000} {props.bank}</p>
        <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard