import React from 'react';

interface GreeterProps {
  person: string;
}

function Greeter(props: GreeterProps): JSX.Element {
  return <div>Hello, {props.person}</div>;
}

export default Greeter;
