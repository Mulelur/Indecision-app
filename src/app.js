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
  handlePick() {
    alert("it works");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What shuld i do?</button>
        <br />
      </div>
    );
  }
}
class Options extends React.Component {
  handleRemoveAll() {
    alert("some message ");
  }
  render() {
    const options = this.props.options;

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <br></br>
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
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <p>AddOptions component here</p>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add opption</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
