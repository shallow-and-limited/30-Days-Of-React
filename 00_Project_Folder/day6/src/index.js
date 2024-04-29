import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root');

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.headingText = props.heading;
  }

  greetPeople() {
    return 'Hello, React Developers';
  }

  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{this.headingText}</h1>
          <h2>Getting Started React</h2>
          <h3>{this.greetPeople()}</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 6, 2020</small>
        </div>
      </header>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header heading="Welcome to 30 Days of React" />
      </div>
    )
  }
}

ReactDOM.render(<App />, root)
