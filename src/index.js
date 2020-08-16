// const element = document.createElement('h1')
// element.innerText = "Hello, Vander"

// const container = document.getElementById('app')

// container.appendChild(element)

import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hola Vander</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a platzi"
// );
// const name = "Zhaida";
// const sum = () => 3 * 3;

// const element = React.createElement("h1", {}, `Hola soy ${name}`);
// const jsx = <h1>Hola soy, {sum()}</h1>;

const jsx = (
  <div>
    <h1>Hola, soy Vander</h1>
    <p>Soy estudiante</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Vander"),
  React.createElement("p", {}, "Soy estudiante")
);
const container = document.getElementById("app");
// ReactDOM.render(__qué__, __dónde__)
ReactDOM.render(element, container);
