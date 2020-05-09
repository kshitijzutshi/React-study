let count = 0;
// Counter template

const addOne = () => {
    count++;
    // console.log(count);
    renderCounterApp();
    
}
const subOne = () => {
    count--;
    // console.log(count);
    renderCounterApp();
    
}
const reset = () => {
    count = 0;
    // console.log(count);
    renderCounterApp();
    
}


let approot = document.getElementById('app');
const renderCounterApp = () =>{
    const templateTwo = (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    
    // what variable and where to render it in
ReactDOM.render(templateTwo,approot);
};


renderCounterApp();
