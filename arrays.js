//ARRAYS
let my_array = [20, 30, 40, 50, 60];
console.log(my_array[0]);

//using a loop to look through our array
for( let i=0; i<=4; i++){
    console.log(my_array[i]);
}

//Odd numbers
for( let j=0; j<=4; j++){
    let x = my_array[j];
    if (x%2 == 0){
        console.log("Odd number");
        console.log(my_array[j]);
    }
}