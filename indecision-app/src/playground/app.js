class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      // options: [],
      options: props.options,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }

      console.log("Fetching data");
    } catch (e) {
      // do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
      console.log("saving data");
    }
  }
  componentWillUnmount() {
    console.log("component will get unmounted");
  }

  handleDeleteOptions() {
    // arrow shorthand
    this.setState(() => ({ options: [] }));
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
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }

  handleDeleteOption(optionToRemove) {
    // console.log("delete single item", optionToRemove);
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        // this callback fn returns true then nothing changes but false means entire array is deleted
        return optionToRemove !== option;
      }),
    }));
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
          handleDeleteOption={this.handleDeleteOption}
        />
        {/* React Action component rendered */}
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

/*
Convert Header to stateless functional component


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

*/

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// default props to header -- title and subtitle
Header.defaultProps = {
  title: "Indecision",
};

/*
Convert Action to stateless functional component


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

*/

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What Should I do?
      </button>
    </div>
  );
};

/* 
  
Passing options array as prop from the Indecision component to Options component, 
Inside Options class method the THIS is not defined, 
hence we set this to refer to options array.

Converting Options class to stateless functional component

class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove ALL</button>
        { <p>{`Your options length is ${this.props.options.length}`}</p> }
        // {this.props.options.map((option) => (
          // <Option key={option} optionText={option} />
        // ))}
      // </div>
    // );
  // }
// }

*/

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove ALL</button>
      {props.options.length === 0 && (
        <p>Please add an option to get started!</p>
      )}
      {/* <p>{`Your options length is ${this.props.options.length}`}</p> */}
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

/*

Converting Option class to stateless functional component

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

*/

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

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
    this.setState(() => ({ error: errormsg }));
    if (!errormsg) {
      evt.target.elements.option.value = "";
    }
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
