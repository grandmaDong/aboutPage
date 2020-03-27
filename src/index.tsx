import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const enviroment = process.env.NODE_ENV
console.log('NODE_ENV:', enviroment)

ReactDOM.render(<App />, document.getElementById('root'));
