"use strict";

// console.log("it works!!");

var app = {
  title: "Indecision App",
  subtitle: "This is some info"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
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
// const template2 = (
//   <div>
//     <h1>Rotonda Mulelu</h1>
//     <p>Age: 20</p>
//     <p>Location: Thohoyandou</p>
//   </div>
// );
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
