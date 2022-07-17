import React from 'react';

function Greeter(props: { person: string }): JSX.Element {
  return <div>Hello, {props.person}</div>;
}

export default Greeter;
