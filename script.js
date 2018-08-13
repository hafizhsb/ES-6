// let & const
// variable yg hanya dapat diakses pada block yang sama (block dipisahkan oleh kurung kurawal{}, dapat ditemui pada if, for, while)

//========================================//
var name1 = 'Budi';
let name2 = 'Adi';
const name3 = 'Ani';

name1 = 'Badu';
name2 = 'Ali';
// name3 = 'Ana'; //nilai const tidak dapat diubah

console.log(name1)
console.log(name2)
console.log(name3)
//========================================//

//========================================//
function test1(a){
    //function scope
    let firstName;

    if(a){
        firstName = 'Budi'

        //block scope
        let lastName = 'Adi'
    }

    console.log(firstName);
    console.log(firstName+lastName);//error karena lastName berada dalam block scope
}
// test1(true);
//========================================//


//========================================//
let i = 23;

for(let i=0; i<5; i++){
    console.log(i);
}
console.log(i);
//========================================//

//========================================//
var b = 23;

for(var b=0; b<5; b++){
    console.log(b);
}

console.log(b);
//========================================//