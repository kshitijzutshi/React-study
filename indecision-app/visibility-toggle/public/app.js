"use strict";

var approot = document.getElementById("app");

var detailshow = function detailshow() {
  console.log("bjsbdjw");

  btnvalue = !btnvalue;
  renderToggleApp();
};

var btnvalue = false;
var renderToggleApp = function renderToggleApp() {
  var apptemplate = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { id: "btn1", onClick: detailshow },
      btnvalue ? "Hide details" : "Show details"
    ),
    btnvalue && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hello there is are the details!!!"
      )
    )
  );
  ReactDOM.render(apptemplate, approot);
};

renderToggleApp();
