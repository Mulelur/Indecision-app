// console.log("it works!!");

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
const template2 = (
  <div>
    <h1>Rotonda Mulelu</h1>
    <p>Age: 20</p>
    <p>Location: Thohoyandou</p>
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
