'use strict';

var nameVar = 'code';
console.log('nameVar', nameVar);

let nameLet = 'code';
nameLet = 'astra';
console.log('nameLet', nameLet);

const nameConst = 'codeastra';
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
