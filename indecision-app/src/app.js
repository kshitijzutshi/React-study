// JSX - Javascript syntax extension XML
let template = <h1>Indecision App</h1>;

var app = {
  title: "Indecision App",
  subtitle: "Put your Life in hands of a computer",
  options: ["one", "two"],
};

const onFormSubmit = (evt) => {
  // prevent full page refresh
  evt.preventDefault();
  const option = evt.target.elements.option.value;

  if (option) {
    app.options.push(option);
    evt.target.elements.option.value = "";
    renderIndecisionApp();
  }
};

const resetAll = () => {
  app.options = [];
  console.log(app.options);
  renderIndecisionApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  // console.log(randomNum);
  alert(option);
};

const numbers = [55, 101, 1000];

let approot = document.getElementById("app");

const renderIndecisionApp = () => {
  let templatetwo = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>options array length {app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>

      <button onClick={resetAll}>reset options</button>
      {numbers.map((number) => {
        return <p key={number}>Number : {number}</p>;
      })}
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
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
