import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const Logo = () => {
  return (
    <div className='logo'>
      
    </div>
  )
}

const Navigation = () => {

  return (
    <nav className='navigation'>

    </nav>
  )
}


const IconActions = () => {
  return (
    <div className='header-icons'>
      <ul>

      
      </ul>
    </div>
  )
}


const Header = (props) => {
  return (
    <sticky-header className='header-wrapper'>
      <header className={'header-wrapper ' + (props.class || '')}>
        <Logo />
        <Navigation />
        <IconActions />
      </header>
    </sticky-header>
  )
}

const Main = () => {
  let text = 'This is a text';

  return (
    <main className='main'>
      <h2>{text}</h2>
      <Button onClick={() => { console.log('test'); }} status={[1,2]} text="Clicker" />
    </main>
  )
}

const Button = ({status, text, onClick}) => {
  console.log(status);

  let style = {
    border: '1px solid red',
  }

  return (
    <button onClick={onClick} style={style}>{text}</button>
  )
}

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  )
}


ReactDOM.render(<App />, root);