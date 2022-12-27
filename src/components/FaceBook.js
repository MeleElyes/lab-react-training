import React from "react";
import profiles from '../data/berlin.json';

const FaceBook = () =>{

    return (
        <>
        {profiles.map((element,index) => {return <div className="Facebook" key={index}>
        <div>
        <img src={element.img} alt="IdPicture"/>
        </div>
        <div className="IdDetails">
        <p ><b>First name :</b> {element.firstName}</p>
        <p><b>Last name :</b> {element.lastName}</p>
        <p><b>Country :</b> {element.country}</p>
        <p><b>Type :</b> {element.isStudent === true ? "Student": "Teacher"}</p>
        </div>
        </div>
        })} 
        </>
    )
}

export default FaceBook