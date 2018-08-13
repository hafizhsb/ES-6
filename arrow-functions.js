// Arrow functions

const years = [1990, 1996, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
    return 2016 - el;
});
console.log(ages5);


// ES 6 (arrow function dengan 1 argumen)
let age6 = years.map( el => 2016 - el);
console.log(age6);

// Arrow function dengan lebih dari 1 argumen
age6 = years.map( (el, index) => `Elemen ke-${index+1} adalah: ${el}`);
console.log(age6);

//arrow function dengan lebih dari 1 baris kode
age6 = years.map( (el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Elemen ke-${index+1} adalah: ${el}`;
});
console.log(age6);