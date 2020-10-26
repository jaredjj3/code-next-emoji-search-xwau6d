import React from 'react';

export const Results = (props) => {
  return <div>Results: {JSON.stringify(props.emojis, null, 2)}</div>;
};
