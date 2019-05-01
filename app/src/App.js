import React from 'react';
// import logo from './logo.svg';
// import Header from './components/Header'
import './App.css';
// import User from './components/User'
// import Button from './components/Button'
import MoviesList from './components/MoviesList'

function App() {
  let listElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => <li key={i}>{el}</li>)

  return (
    <div className="App">
      <MoviesList />
      <ul>{listElements}</ul>
      {/* <User firstName="John" lastName="Williams" />
      <User firstName="Jane" lastName="Smith" /> */}
      {/* <Header /> */}
      {/* <Button /> */}
    </div>
  );
}

export default App;
