const add = (a, b) => {
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Sachin',
    cities: ['Chennai', 'Delhi', 'Mumbai'],
    printPlacesLived: function () {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }

    /*
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return city + '!';
        });
        return cityMessages;
    }
    */
};
console.log(user.printPlacesLived());