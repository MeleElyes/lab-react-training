import {useState} from "react";

const SignupPage = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

 const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      }
      
      const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
          setError('You typed an invalid email');
        } else {
          setError('You typed a valid email');
        }
    
        setMessage(event.target.value);
      };

const colorMessInput = () => {
   let divStyle = ""
   if(error === 'You typed an invalid email'){divStyle = {color: 'red'}} 
   else{divStyle = {color:'green'}}
   return divStyle
}
    return (<>
        <p>Email</p>
       <input value={message}
        onChange={handleChange}></input> 
         {error && <p style={colorMessInput()}>{error}</p>}
       <p>Password</p>
       <input></input>
       <p>Nationality</p>
       <select></select>

    </>)
}

export default SignupPage;