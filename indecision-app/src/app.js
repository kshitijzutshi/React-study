class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }
  handlePick() {
    const randomnum = Math.floor(Math.random() * this.state.options.length);
    alert(`handlePick - ${this.state.options[randomnum]}`);
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This item already exists!";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in hands of a computer";
    // const options = ["Thing1", "Thing2", "Thing3"];
    return (
      <div>
        {/* React Header component rendered */}
        <Header title={title} subtitle={subtitle} />
        {/* React Action component rendered */}
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        {/* React Action component rendered */}
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        {/* React Action component rendered */}
        <AddOption handleAddOption={this.handleAddOption} />
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
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What Should I do?
        </button>
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
    // this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  // handleRemoveAll() {
  //   console.log(this.props.options);

  //   console.log("remove all alert");
  // }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove ALL</button>
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(evt) {
    // prevent full page refresh
    evt.preventDefault();
    const option = evt.target.elements.option.value.trim();
    const errormsg = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error: errormsg,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
