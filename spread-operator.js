// Spread Operator

function addFourAges(a, b, c, d){
    return a + b + c + d;
}

console.log(addFourAges(18, 22, 30, 35));

// ES5
var ages = [18, 22, 30, 35];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
var ages2 = [18, 22, 30, 35];
var sum3 = addFourAges(...ages2);
console.log([...ages])

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Marry', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lili', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');