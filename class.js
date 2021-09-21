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
function animal ( name, color, type, gender, adjective){
    this.name = name; 
    this.color = color;
    this.type = type;
    this.gender = gender;
    this.adjective = adjective;
    this.cry = function(){
        return this.name + ' ' + 'has a sound!';
    }
    this.story = function() {
        return this.name + ' is a ' + this.adjective + ' animal.';
    }
}

let animal1 = new animal('elephant', 'grey','wild','male');
let animal2 = new animal('dog','brown','domestic','female','bright');

//new methods being called for the object instances.
console.log(animal1.cry());
console.log(animal2.story());

//seven classes with a minimum of seven properties with atleast two methods with atleast three instances (NOT BEYOND TWO PM)
//put comments in your work

//ARROW FUNCTIONS
function woman (name, height, color, tribe, character, style){
    this.name = name;
    this.height = height;
    this.color = color;
    this.tribe = tribe;
    this.character = character;
    this.style = style;
    this.laugh = (cry_style) =>{
        return this.name + ' '+'laughs'+' '+ cry_style;
    }
}

let woman1 = new woman('Grace', 'tall', 'light-skinned','Muganda', 'Principled', 'sophisticated');
console.log(woman1.laugh('bubbly'));

const man = function(name, facial, voice){
    this.name = name;
    this.facial = facial;
    this.voice = voice;
    this.care = (percent) => {
        return this.name + ' is '+ percent + ' when it comes to care';
    }
}

let man1 = new man('Manny', 'absent', 'base');
console.log(man1.care(10 + '%'));
