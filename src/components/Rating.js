import React from "react";

const Rating = (props) => {
    let rate =""
    if(!props.rating){rate = props.children}
    else {rate=props.rating}
 

    const rateDisplay = () =>{
    if (Math.round(rate)===0){return "☆☆☆☆☆"}
    else if (Math.round(rate)===1){return "★☆☆☆☆"}
    else if (Math.round(rate)===2){return "★★☆☆☆"}
    else if (Math.round(rate)===3){return "★★★☆☆"}
    else if (Math.round(rate)===4){return "★★★★☆"}
    else if (Math.round(rate)===5){return "★★★★★"}
    }

    return (
        <div className="Rating">
        {rateDisplay()}
        </div>

    )
}

export default Rating