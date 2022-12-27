import React, { useState } from "react";

const ClickablePicture = (props) => {

const [img,setImg]=useState(props.img)

    return(
<>
    <img className="ClickablePicture" onClick={()=> img === props.img? setImg(props.imgClicked):setImg(props.img)} src={img} alt="maxencePicture"/>
</>
    )
}

export default ClickablePicture;