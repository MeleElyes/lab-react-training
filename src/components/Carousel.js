import React, { useState } from "react";

const Carousel = (props) => {

    const [count,setCount] = useState(0)
    return(
        <div className="Carousel">
        <button onClick={()=> count<=0? setCount(3):setCount(count-1) }>Left</button>
        <img src={props.images[count]} alt="Carousel"/>
        <button onClick={()=> count>=3? setCount(0):setCount(count+1) }>Right</button>
        </div>
    )
}

export default Carousel;