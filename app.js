import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div", {id:"parent"},[
    React.createElement("div",{id:"child1"},[
            React.createElement("h1",{id:"heading1"},"Hey I am h1"),
            React.createElement("h2",{id:"heading2"},"Hey I am h2"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"heading3"},"Hey I am h3"),
        React.createElement("h2",{id:"heading4"},"Hey I am h4"),
    ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
