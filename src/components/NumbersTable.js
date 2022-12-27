import React from 'react';

const NumbersTable = (props) => {
  let array = [];

  for (let i = 1; i < props.limit + 1; i++) {
    array.push(i);
  }

  const divStyle = {
    background: 'red',
  };

  return (
    <div className='AllNumbersTable'>
    <tr className='NumbersTable'>
      {array.map((element, index) =>
        element % 2 === 0 ? (
          <td className="NumbersTableBox" style={divStyle} key={index}>
            {element}
          </td>
        ) : (
          <td className="NumbersTableBox" key={index}>
            {element}
          </td>
        )
      )}
    </tr>
    </div>
  );
};

export default NumbersTable;
