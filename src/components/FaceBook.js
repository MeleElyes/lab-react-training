import React from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  let country = [];
  for (let i = 0; i < profiles.length; i++) {
    if (!country.includes(profiles[i].country)) {
      country.push(profiles[i].country);
    }
  }

  return (
    <>
      <button
        onClick={() => {
          let AllCountrySelected = document.querySelectorAll('.Facebook');
          AllCountrySelected.forEach((element) =>
            element.style.background === 'blue'
              ? (element.style.background = 'none')
              : (element.style.background = 'blue')
          );
        }}
      >
        All
      </button>
      {country.map((element, index) => (
        <button
          onClick={() => {
            let countrySelected = document.querySelectorAll(`.${element}`);
            countrySelected.forEach((element) =>
              element.parentNode.parentNode.style.background === 'blue'
                ? (element.parentNode.parentNode.style.background = 'none')
                : (element.parentNode.parentNode.style.background = 'blue')
            );
          }}
          key={index}
        >
          {element}
        </button>
      ))}
      {profiles.map((element, index) => {
        return (
          <div className="Facebook" key={index}>
            <div>
              <img src={element.img} alt="IdPicture" />
            </div>
            <div className="IdDetailsFacebook">
              <p>
                <b>First name :</b> {element.firstName}
              </p>
              <p>
                <b>Last name :</b> {element.lastName}
              </p>
              <p className={element.country}>
                <b>Country :</b> {element.country}
              </p>
              <p>
                <b>Type :</b>{' '}
                {element.isStudent === true ? 'Student' : 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaceBook;
