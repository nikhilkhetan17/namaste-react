import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement(
//   'h2',
//   { id: 'heading' },
//   'Hello from React!'
// );

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

// ##########-----------------------------------------------------##########
/* 
<div id='parent'>
    <div id='child'>
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>
*/

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am Namaste react!'),
    React.createElement('h2', {}, 'I am h2 tag!'),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
