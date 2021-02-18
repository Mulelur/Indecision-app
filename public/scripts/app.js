console.log("it works!!");

// const template = <p>This is my JSX</p>;
const template = /*#__PURE__*/ React.createElement(
  "h1",
  null,
  "This is my JSX "
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
