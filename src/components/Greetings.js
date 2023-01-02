import React from "react";

const Greetings = (props) => {


 const language = () => {
    switch(props.lang){
    case "de" : return "Hallo";
    case "fr" : return "Bonjour";
    case "en" : return "Hello";
    case "es" : return "Buenos dias";
    default : return "Hello"
}
 }
 
    return(
    <>
        <div className="Greetings">
            {language()} {props.children}

        </div>
    </>

    )
}

export default Greetings;