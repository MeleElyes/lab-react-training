import React from "react";
import Rating from "./Rating";


const DriverCard = (props) => {

    return(
        <div className="DriverCard">
        <img src={props.img} alt="Driver"/>

        <div>
            <div className="Name">{props.name}</div>
            {Rating(props)}
            <div>{props.car.model} - {props.car.licensePlate}</div>
        </div>


        </div>
    )
}

export default DriverCard