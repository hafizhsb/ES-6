// Destructuring

// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];

console.log(name5);
console.log(age5);

// ES6
const [name, age] = ['John', 26];
console.log(name, age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

// Menggunakan nama variable yg sama dengan key di object
const {firstName, lastName} = obj;
console.log(firstName, lastName);

// Merubah nama variable
const {firstName: a, lastName: b} = obj;
console.log(a, b);


function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;

    //return [age, 65 - age]
    return {
        age2: age,
        retirement: 65 - age
    }
}

// const [age2, retirement] = calcAgeRetirement(1990);
const {age2, retirement} = calcAgeRetirement(1990);
console.log(age2, retirement);