"use strict";

// console.log("it works!!");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Rotonda Mulelu"
  ),
  React.createElement(
    "p",
    null,
    "Age: 20"
  ),
  React.createElement(
    "p",
    null,
    "Location: Thohoyandou"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
