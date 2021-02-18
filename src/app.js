// console.log("it works!!");

const app = {
  title: "Indecision App",
  subtitle: "This is some info",
};

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);
// const template2 = (
//   <div>
//     <h1>Rotonda Mulelu</h1>
//     <p>Age: 20</p>
//     <p>Location: Thohoyandou</p>
//   </div>
// );
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
