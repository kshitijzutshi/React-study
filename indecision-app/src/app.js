// // import "./utils.js";
// import subtract, { square, add } from "./utils.js";
// import { isAdult, canDrink } from "./person.js";

// console.log("App is running!!!!!!!!!!!!!!!!");
// console.log(square(4));
// console.log(add(2, 3));
// console.log(subtract(3, 1));
// console.log(isAdult(20));
// console.log(canDrink(18));

import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";

console.log(validator.isEmail("test@gmail.com"));

const temp = <p>Testing</p>;

ReactDOM.render(temp, document.getElementById("app"));
