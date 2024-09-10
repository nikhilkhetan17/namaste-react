import React from 'react';
import ReactDOM from 'react-dom/client';

// ###############---------------------------JSX----------------------------################

// React Element
const jsxHeading = (
  <h1 id="jsx-heading" className="heading">
    React JSX
  </h1>
);

// --------**********----------React Component-------************------------
// Class Based Component - OLD
// Functional Component - NEW
// React Functional Component is a JS function which returns JSX code/(ReactElement)
// Functional component Naming convention -> PascalCase

// with retun keyword
const ReactComponent = () => {
  return (
    <div>
      {jsxHeading} {/*we can write any JS code inside JSX using {} */}
      <h2 className="heading">Hello React Component</h2>
    </div>
  );
};

// without return keyword
const ReactComponent1 = () => (
  // Component Composition
  <div id="container">
    <ReactComponent />
    <h3 className="heading">React Functional Component</h3>
    {Hello()}
    <Hello></Hello>
  </div>
);

// Writing JSX using normal function
function Hello() {
  return (
    <div>
      <p className="heading">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        distinctio.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactComponent1 />); // Render functional component to the page

// JSX makes our code readable than React.createElement
// JSX prevents cross site scripting
