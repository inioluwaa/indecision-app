let count = 0;
const addOne = () => {
    console.log('addOne');
    count++;
    renderCounterApp();

};

const minusOne = () => {
    console.log('minusOne');
    count--;
    renderCounterApp();
};

const reset = () => {
    console.log('reset');
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();