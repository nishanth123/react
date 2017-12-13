import React from 'react';
import ReactDOM from 'react-dom';
//import IndecisionApp from './components/IndecisionApp';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my Dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my add expense component
    </div>
);

// /edit EditExpensePage
// /help HelpPage

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

//ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// import './utils.js'
// import { square } from './utils.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(100, 23));

// challenge 
// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(18) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console

// import { isAdult, canDrink } from './person.js';
// console.log(isAdult(18));

//import validator from 'validator';
//import React from 'react';
//import ReactDOM from 'react-dom';

//const template = <p>This is JSX from Webpack</p>;
//ReactDOM.render(template, document.getElementById('app'));

//console.log(validator.isEmail('test.name@gmail.com'));

//console.log("this is a log message");

/*import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return 'Hi. My name is ${this.name}.';
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

// ---

class NewSyntax {
    name = 'Jane';
    getGreeting = () => {
        return 'Hi. My name is ${this.name}.';
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
*/

/*
const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);

ReactDOM.render(<Layout><p>This is inline</p></Layout>, document.getElementById('app'));
*/

