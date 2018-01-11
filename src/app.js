console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onremoveAll = () => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
      <div>
        <h1>{app.title}</h1>
        {(app.subtitle && <p>{app.subtitle}</p>)}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button onClick={onremoveAll}>Remove all</button>
        <ol>
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();

