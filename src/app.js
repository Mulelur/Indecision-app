class IndecisionApp extends React.Component {
  render() {
    const title = "Incdecision";
    const subTitle = "Put your life on the hands of a computer";
    const options = ["thing one ", "thing tow"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    this.props;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What shuld i do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  render() {
    const options = this.props.options;
    return (
      <div>
        <p>{options.length}</p>
        {options.map((item, index) => {
          return <Option key={index} item={item} />;
        })}
        {/* <Option /> */}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <p>{this.props.item}</p>;
  }
}

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p>AddOptions component here</p>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
