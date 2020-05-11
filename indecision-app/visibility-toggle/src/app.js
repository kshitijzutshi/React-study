let approot = document.getElementById("app");

const detailshow = () => {
  console.log("bjsbdjw");

  btnvalue = !btnvalue;
  renderToggleApp();
};

let btnvalue = false;
const renderToggleApp = () => {
  let apptemplate = (
    <div>
      <h1>Visibility Toggle</h1>
      <button id="btn1" onClick={detailshow}>
        {btnvalue ? "Hide details" : "Show details"}
      </button>
      {btnvalue && (
        <div>
          <p>Hello there is are the details!!!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(apptemplate, approot);
};

renderToggleApp();
