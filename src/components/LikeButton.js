import { useState} from "react";


const LikeButton = () => {

    const [count,setCount] = useState(0)
    const [countColor,setCountColor] = useState(0)
    let colorStyle = ['purple','blue','green','yellow','orange','red']

    const divStyle = {
        background: `${colorStyle[countColor]}`
    }
   console.log(countColor)
    return(
        <>
        <button className="Like" onClick={() => countColor < 5 ? setCountColor(countColor+1) & setCount(count+1) : setCount(count+1) & setCountColor(0)} style={divStyle}>{count} Likes</button>
        </>
    )
}

export default LikeButton