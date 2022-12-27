import React from "react";

const IdCard = (props) => {
   
    let dateBirth = props.birth.toString()
    let array = dateBirth.split(" ")
    let birth = `${array[0]} ${array[1]} ${array[2]} ${array[3]}`
    return(
        
        <div className="IdCard">
        <div>
        <img src={props.picture} alt="IdPicture"/>
        </div>
        <div className="IdDetails">
        <p><b>First name :</b> {props.firstName}</p>
        <p><b>Last name :</b> {props.lastName}</p>
        <p><b>Gender :</b> {props.gender}</p>
        <p><b>Height :</b> {props.height/100}m</p>
        <p><b>Birth :</b> {birth}</p>
        </div>
        </div>
    )
}

export default IdCard;