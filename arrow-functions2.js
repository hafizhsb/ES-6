// ES5
function Person(name){
    this.name = name;
}

// Menyimpan this kedalam variable
Person.prototype.myFriends5a = function(friends){
    // Function di dalam map tidak bisa memanggil this, karena akan memanggil global object, bukan object di dalam function
    var self = this;
    var arr = friends.map(function(el){
        return self.name + ' is friends with ' + el;
    }.bind(this)); //bind method agar dapat memanggil object dalam function

    console.log(arr);
}
var friends = ["adi", "ani", "badu"];
new Person("Wahyu").myFriends5a(friends);

// Menggunakan fungsi bind() untuk membinding this
Person.prototype.myFriends5 = function(friends){
    
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this)); //bind method agar dapat memanggil object dalam function

    console.log(arr);
}
var friends = ["adi", "ani", "badu"];
new Person("Nana").myFriends5a(friends);

// ES6 (arrow function share this keyword)
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friends with ${el}`)

    console.log(arr);
}

new Person("budi").myFriends6(friends);