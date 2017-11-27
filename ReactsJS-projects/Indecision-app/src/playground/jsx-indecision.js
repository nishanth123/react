console.log('app.js is running');

var userName = 'Bobby';
var age = 30;
var userLocation = 'Delhi';

const appName = {
  name: 'nishanth',
  age: 27,
  location: 'Guntur'
};

var template = (
  <div>
    <h1>{appName.name.toUpperCase()}</h1>
    <p> Age: {appName.age} </p>  
    <p> Location: {userLocation.toUpperCase()} </p>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  // subtract 1 from count - rerender
  count--;
  renderCounterApp();
};

const reset = () => {
  // set count to 0 a rerender
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option){
    app.option.push(option);
    e.target.elements.option.value = '';
  }
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

const numbers = [55, 100, 1000];

const render = () => {
  const template = (
    <div>
      <button onClick={onRemoveAll}>Remove All</button>
      {
        numbers.map((number) => {
          return <p key={number}>Number: {number}</p>;
        })
      }
    </div>
  );

  ReactDOM.render(template, appRoot);
};

//renderCounterApp();
render();

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
    )
  }
}

const jsx = (
  <div>
    <h1>Title</h1>
    <Header />
    <Action />    
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));



