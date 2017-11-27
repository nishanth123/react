class Person {
    constructor(name = 'Anonymous') {
        this.name = name;   
    }
    getGretting() {
        return 'Hi. I am ${this.name}!';
    }
    getDescription() {
        return '${this.name} is ${this.age} year(s) old.';
    }
}

const me = new Person('Sourav Ganguly');
console.log(me.getGretting());

const other = new Person();
console.log(other.getGretting());