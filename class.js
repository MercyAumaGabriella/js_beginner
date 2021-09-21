//CLASSES AND OBJECTS

//object definition
const food = {
    name: 'posho',
    taste: 'sweet',
    price: '500',
    color: 'white',
    foodValue: 'carbs'
}

//1. STATIC CLASS (one instance of object)
var car = {
    name: 'G-wagon',
    color: 'Black',
    series: 'AMG G63',
    Car_company: 'Mercedes',
    sound: function(){
        console.log("When its a " + car.name + " is new, it vrooms");
    },
    price: function(a,b){
        let add = a+b;
        return add;
    }
}
//adding a property to a class after definition
car.owner = 'Mercy Auma';
car.popularity = function(){
    console.log("United States");
}
// console.log(food.name);
// console.log(car.sound());
// console.log(car.price(8,5));
console.log(car.owner);

const president = {
    name: 'Kagame',
    country: 'Rwanda',
}

//2. DYNAMIC CLASS
function animal ( name, color, type, gender ){
    this.name = name; 
    this.color = color;
    this.type = type;
    this.gender = gender;
}

let animal1 = new animal('elephant', 'grey','wild','male');
let animal2 = new('dog','brown','domestic','female');