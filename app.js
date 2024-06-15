import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React Element (JS object) => HTML element(rendered)

//const heading = React.createElement("h1", { className: "heading" }, "Hello World");

//console.log(heading);

//JSX is transpiled before it reaches JS engine

//JSX => Babel => React.createElement => React Element => HTML element(rendered)

//const jsxheading = <h1 className="heading">Hello World from JSX</h1>;
//console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jsxheading);

//React Functional Component

const Temp = () => {
  return (
    <div>
      <ul>
        <li>I am a component 1</li>
        <li>Hey 2</li>
        <li>Hey 3</li>
      </ul>
    </div>
  );
};

const HeadingComp = <h1 className="Head"> I am just an element </h1>;

const HeadingComponent2 = () => (
  <h3 className="Heading1"> I am a functional component</h3>
);

const number = 10;
const HeadingComponent = () => {
  return (
    <div>
      <Temp />
      {HeadingComponent2()}
      <h2> {number == 10 ? <h1>hello 10 here</h1> : <h3>I am not a 10</h3>}</h2>
      {HeadingComp}
      <h1 className="Heading2">Hey there!</h1>
    </div>
  );
};

root.render(<HeadingComponent />);
