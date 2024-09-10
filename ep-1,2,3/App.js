import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating react element using core react
// React.createElement => RectElement(Object) => when we render it to DOM => it becomes HTML element
const heading = React.createElement(
  'h2',
  { id: 'heading' },
  'Hello from React!'
); // This react element is an object not an HTML element

console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById('root')); // creating root for our react app

// root.render(heading);
// root.render() is converting everything into html and then browser is rendering it

// ##########------------------------- Nested Elements ---------------------------##########

/* 
<div id='parent'>
    <div id='child'>
        <h1>I am h1 tag!</h1>
        <h2>I am h2 tag!</h2>
    </div>
</div>
*/

// Nested Elements
// const parent = React.createElement(
//   'div',
//   { id: 'parent' },
//   React.createElement('div', { id: 'child' }, [
//     React.createElement('h1', {}, 'I am Namaste react!'),
//     React.createElement('h2', {}, 'I am h2 tag!'),
//   ])
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(parent);

// ###############---------------------------JSX----------------------------################
// Creating react element using JSX

// - JSX is not part of react
// - JSX is not HTML (It is HTML & JS mix)

// It is difficult to create react element using .createElement so FB developers created JSX
// JSX is - HTML/XML like syntax by which it is easier to create react elements
// JSX is a convention where we merge HTML and JS together

// JSX => Babel transpiles it to React.createElement => RectElement(Object) => Rendered(HTML element)
const jsxHeading = (
  <h1 id="jsx-heading" className="heading">
    React JSX
  </h1>
);
console.log(jsxHeading);
// This jsxHeading is a reactElement which is equivalent to React.createElement

// JSX(gets transpiled before it reaches JSengine) -->Parcel -->Babel
// Babel job is to convert JSX into core react code(React.createElement)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);

// If we write jsx in multiple lines you need to use ()
