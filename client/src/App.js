import './App.css';
import React from 'react';
import SignUpPage from './components/views/signUp/signUp';

function App() {

  


  return (
    <div className="App">
      <header className="App-header">
        <SignUpPage />
        {/* <p className='p-10 m-10 underline'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
