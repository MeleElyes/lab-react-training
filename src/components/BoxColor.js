import React from "react";

const BoxColor = (props) => {

    const toHex =() => {
        let valueDeHex = `${props.r.toString(16)}${props.g.toString(16)}${props.b.toString(16)}`
        return valueDeHex
    }

return(
    <div className="BoxColor" style={{background: `rgb(${props.r},${props.g},${props.b})`}}>
        <p>rgb({props.r},{props.g},{props.b}) <br/> #{toHex()}</p>
    </div>
)

}

export default BoxColor;