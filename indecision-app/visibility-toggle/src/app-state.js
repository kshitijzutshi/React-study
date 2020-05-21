class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      btnvalue: false,
    };
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button id="btn1" onClick={this.handleToggleVisibility}>
          {this.state.btnvalue ? "Hide details" : "Show details"}
        </button>
        {this.state.btnvalue && (
          <div>
            <p>Hello there is are the details!!!</p>
          </div>
        )}
      </div>
    );
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        btnvalue: (prevState.btnvalue = !prevState.btnvalue),
      };
    });
    btnvalue = !btnvalue;
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let approot = document.getElementById("app");

// const detailshow = () => {
//   console.log("bjsbdjw");

//   btnvalue = !btnvalue;
//   renderToggleApp();
// };

// let btnvalue = false;
// const renderToggleApp = () => {
//   let apptemplate = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button id="btn1" onClick={detailshow}>
//         {btnvalue ? "Hide details" : "Show details"}
//       </button>
//       {btnvalue && (
//         <div>
//           <p>Hello there is are the details!!!</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(apptemplate, approot);
// };

// renderToggleApp();
