import { useEffect, useState } from 'react';

const Dice = () => {
  const [dice, setDice] = useState(`/img/dice3.png`);

useEffect(() => {
if(dice === '/img/dice-empty.png'){
 let interval = setInterval(() => {
        setDice(`/img/dice${Math.floor(Math.random() * 5 + 1)}.png`); clearInterval(interval);
      }, 1000);
}
},[dice])
 


  return (
    <>
      <img className='Dice'
        onClick={() => {
          setDice('/img/dice-empty.png');
        }}
        src={dice}
        alt="Dice"
      />
    </>
  );
    }
export default Dice;
