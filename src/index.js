import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchMovie from "./searchmovie";

class Main extends React.Component {
  render(){
    return(
      <div className="container">
      <h1 className="title">Movie Search</h1>
      <SearchMovie />
    </div>
    );
  }
}


ReactDOM.render(<Main />,document.getElementById('root'));


{/* 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


