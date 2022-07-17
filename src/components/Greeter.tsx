import React from 'react';

interface GreeterProps {
  person: string;
}

// function Greeter(props: GreeterProps): JSX.Element {
//   return <div>Hello, {props.person}</div>;
// }

// a destructured version of the above
function Greeter({ person }: GreeterProps): JSX.Element {
  return <div>Hello, {person}</div>;
}

export default Greeter;
