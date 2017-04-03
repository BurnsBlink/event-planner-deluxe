import React from 'react';

const TextField = props => {
  return (
    <fieldset className="entrants">
      <label htmlFor={props.id}>{props.label}:&nbsp;</label>
      <input
        id={props.id}
        name={props.id}
        onChange={props.handlerFunction}
        type='text'
        value={props.content}
      />
    </fieldset>
  );
}

export default TextField;
