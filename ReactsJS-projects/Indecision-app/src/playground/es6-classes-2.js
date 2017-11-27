import React from 'react';

// console.log('app.js is running');

// var userName = 'Bobby';
// var age = 30;
// var userLocation = 'Delhi';

// const appName = {
//   name: 'nishanth',
//   age: 27,
//   location: 'Guntur'
// };
/*
var template = (
  <div>
    <h1>{appName.name.toUpperCase()}</h1>
    <p> Age: {appName.age} </p>  
    <p> Location: {userLocation.toUpperCase()} </p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
*/
class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  };
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put you life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option component here
      </div>
    );
  }
}

//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
