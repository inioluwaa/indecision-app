let visibility = false;

const app = {
  title: 'Visibility Toggle'
};

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
      <div>
        <h1>{app.title}</h1>
        <button onClick={toggleVisibility}>
          {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
            <div>
              <p>Hey, These are some details you can now see!</p>
            </div>
        )}
      </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

render();