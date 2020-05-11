"use strict";

// JSX - Javascript syntax extension XML
var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);

var app = {
  title: "Indecision App",
  subtitle: "Put your Life in hands of a computer",
  options: ["one", "two"]
};

var onFormSubmit = function onFormSubmit(evt) {
  // prevent full page refresh
  evt.preventDefault();
  var option = evt.target.elements.option.value;

  if (option) {
    app.options.push(option);
    evt.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

var resetAll = function resetAll() {
  app.options = [];
  console.log(app.options);
  renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  // console.log(randomNum);
  alert(option);
};

var numbers = [55, 101, 1000];

var approot = document.getElementById("app");

var renderIndecisionApp = function renderIndecisionApp() {
  var templatetwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "p",
      null,
      "options array length ",
      app.options.length
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: resetAll },
      "reset options"
    ),
    numbers.map(function (number) {
      return React.createElement(
        "p",
        { key: number },
        "Number : ",
        number
      );
    }),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(templatetwo, approot);
};

renderIndecisionApp();

// let user= {
//     name  : 'Kzee',
//     Age: 26,
//     location: 'Phily'
// };

// function getLocation(location){
//     if(location){
//         <p>Location : {location}</p>
//     }
//     else{
//     return 'Unknown';
//     }
// };

// var test = (
//     <div>
//         <h1>{user.name ? user.name : 'Unknown'}</h1>
//         <p>Age : {user.Age}</p>

//     </div>
// );

// const squarefn = (x) => {
//     return x * x;
// }

// const sqagain = squarefn(9);
// console.log(sqagain(9));
