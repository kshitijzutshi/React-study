class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count,
      name: props.name,
    };
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        name: (prevState.name = "Add function activated!"),
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
        name: (prevState.name = "sub function activated!"),
      };
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: (prevState.count = 0),
        name: (prevState.name = "reset function activated!"),
      };
    });
  }
}

Counter.defaultProps = {
  count: 0,
  name: "Default",
};

ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0;
// // Counter template

// const addOne = () => {
//   count++;
//   // console.log(count);
//   renderCounterApp();
// };
// const subOne = () => {
//   count--;
//   // console.log(count);
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   // console.log(count);
//   renderCounterApp();
// };

// let approot = document.getElementById("app");
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   // what variable and where to render it in
//   ReactDOM.render(templateTwo, approot);
// };

// renderCounterApp();
