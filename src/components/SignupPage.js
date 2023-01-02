import { useState } from 'react';
import Greetings from './Greetings';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);
  const [lang,SetLang] = useState("")

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const isValidPassword = (password) => {
    return /^[A-Za-z]\w{7,14}$/.test(password);
  };

  const handleChangeEmail = (event) => {
    if (!isValidEmail(event.target.value)) {
      setErrorEmail('You typed an invalid email');
    } else {
      setErrorEmail('You typed a valid email');
    }

    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    if (!isValidPassword(event.target.value)) {
      setErrorPassword('You typed an week password');
    } else {
      setErrorPassword('You typed an strong password');
    }

    setPassword(event.target.value);
  };

  const colorMessInput = () => {
    let divStyle = '';
    if (errorEmail === 'You typed an invalid email') {
      divStyle = { color: 'red' };
    } else if (errorPassword === 'You typed an week password') {
      divStyle = { color: 'red' };
    } else if (errorPassword === 'You typed an strong password') {
      divStyle = { color: 'green' };
    } else if (errorEmail === 'You typed a valid email') {
      divStyle = { color: 'green' };
    }
    return divStyle;
  };


  return (
    <div className='SignupPage'>
      <p>Email</p>
      <input
        type={'email'}
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
      ></input>
      {errorEmail && <p style={colorMessInput()}>{errorEmail}</p>}
      <p>
        Password
        <i>(Between 7 to 14 character with 1 Upper letter and 1 Lower)</i>
      </p>
      <input
        type={'password'}
        value={password}
        onChange={handleChangePassword}
        placeholder="Password"
      ></input>
      {errorPassword && <p style={colorMessInput()}>{errorPassword}</p>}
      <p>Nationality</p>
      <select className='Language' onChange={e=> SetLang(e.target.value)}>
        <option value="">--Please choose you Nationality--</option>
        <option value="en">English</option>
        <option value="de">Deutsche</option>
        <option value="fr">French</option>
      </select>
      <button>Sign Up</button>
       
      <Greetings lang={lang}><p>Your email adress is: {email}</p>{errorEmail === 'You typed a valid email'&& <p>Your email address is correct</p> }
      </Greetings>
      
      

    </div>
  );
};

export default SignupPage;
