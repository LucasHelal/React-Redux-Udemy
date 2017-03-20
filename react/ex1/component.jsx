import React from 'react';

// export default function() {
//   return (<h1>Primeiro Componente1!!</h1>);
// };

// export default () => (
//   <h1> Component arrow function </h1>
// );

export default props => (
  <h1> {props.value}  </h1>
);
