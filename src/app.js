class Header extends React.Component {
  render() {
    return (
        <div>
          <h1>Indecision App</h1>
          <h2>Put your life in the hands of a computer</h2>
        </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
        <div>
          <button>What should i do</button>
        </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
        <div>
          Options component here
        </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
        <div>
          AddOption component here
        </div>
    )
  }
}

const jsx = (
    <div>
      <Header/>
      <Action/>
      <Option/>
      <AddOption/>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));
