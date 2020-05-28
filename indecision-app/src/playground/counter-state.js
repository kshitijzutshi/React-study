class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      // name: props.name,
    };
  }

  componentDidMount() {
    const stringNumber = localStorage.getItem("count");
    const count = parseInt(stringNumber, 10);
    if (!isNaN(count)) {
      // if its a number
      this.setState(() => ({ count: count }));
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      // const json = JSON.parseInt(this.state.count);
      localStorage.setItem("count", this.state.count);
    }
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
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  }
}

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
