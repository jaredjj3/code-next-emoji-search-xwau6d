import React from 'react';

export const Input = (props) => {
  const onChange = (e) => {
    props.onInputChange(e.target.value);
  };

  return <input value={props.query} onChange={onChange} />;
};
