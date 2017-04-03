import React from 'react';

const RegistrantRow = props => {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default RegistrantRow;
