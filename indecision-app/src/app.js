class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in hands of a computer";
    const options = ["Thing1", "Thing2", "Thing3"];
    return (
      <div>
        {/* React Header component rendered */}
        <Header title={title} subtitle={subtitle} />
        {/* React Action component rendered */}
        <Action />
        {/* React Action component rendered */}
        <Options options={options} />
        {/* React Action component rendered */}
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    console.log("handlepick");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}

/* 
  
Passing options array as prop from the Indecision component to Options component, 
Inside Options class method the THIS is not defined, 
hence we set this to refer to options array.

 */

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log(this.props.options);

    console.log("remove all alert");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove ALL</button>
        {/* <p>{`Your options length is ${this.props.options.length}`}</p> */}
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  handleAddOption(evt) {
    // prevent full page refresh
    evt.preventDefault();
    const option = evt.target.elements.option.value.trim();

    if (option) {
      alert("handle add option");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const jsx = (
//   <div>
//     {/* React Header component rendered */}
//     <Header />
//     {/* React Action component rendered */}
//     <Action />
//     {/* React Action component rendered */}
//     <Options />
//     {/* React Action component rendered */}
//     <AddOption />
//   </div>
// );

// ReactDOM.render(jsx, document.getElementById("app"));

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
